
# Angebotsplattform mit PostgreSQL, PostgREST, OpenAPI und Angular

## 1️⃣ Überblick

Ziel der Schulung:

- Aufbau einer einfachen Angebotsplattform mit Mehrbenutzer-Vorbereitung  
- Verwendung von **PostgreSQL** als Datenbank  
- Verwendung von **PostgREST** als Instant-API-Layer  
- Nutzung von **OpenAPI** zur Dokumentation der API  
- Frontend mit **Angular**  
- Benutzerverwaltung wird perspektivisch über **Keycloak** ergänzt

## 2️⃣ Architektur

**Backend-Stack:**

- **PostgreSQL**  
- **PostgREST**  
- **Docker-Compose**

**Frontend-Stack:**

- **Angular 20 Standalone Component**
- **HttpClient für REST-API Zugriff**

## 3️⃣ Datenmodell

### Schema: `suuq`

#### Tabelle `artikel`

| Spalte | Typ | Bedeutung |
|---|---|---|
| `id` | serial | Primärschlüssel |
| `titel` | varchar | Artikelname |
| `beschreibung` | text | Beschreibung |
| `anbieter_id` | varchar | Keycloak-User-ID (aktuell fest '1') |
| `preis_vorschlag` | numeric(10,2) | Preisvorstellung |
| `status` | varchar | `offen`, `reserviert`, `verkauft` |
| `angelegt_am` | timestamptz | Erstellungszeitpunkt |

#### Tabelle `angebot`

| Spalte | Typ | Bedeutung |
|---|---|---|
| `id` | serial | Primärschlüssel |
| `artikel_id` | integer | Fremdschlüssel zu `artikel.id` |
| `bietender_id` | varchar | Keycloak-User-ID (aktuell fest '1') |
| `betrag` | numeric(10,2) | Angebotsbetrag |
| `erstellt_am` | timestamptz | Zeitstempel |

## 4️⃣ Validierung

### Trigger für Angebots-Validierung

```sql
create or replace function check_angebot_hoechstgebot()
returns trigger as $$
declare
    max_betrag numeric(10,2);
begin
    select coalesce(max(betrag), 0) into max_betrag from angebot where artikel_id = new.artikel_id;

    if max_betrag > 0 then
        if new.betrag < max_betrag + 0.5 then
            raise exception 'Neues Angebot (%s) muss mindestens 50 Cent über dem bisherigen Höchstgebot (%s) liegen.', new.betrag, max_betrag;
        end if;
    else
        if new.betrag < 0.5 then
            raise exception 'Erstes Gebot muss mindestens 0.5 betragen.';
        end if;
    end if;

    return new;
end;
$$ language plpgsql;
```

## 5️⃣ View für Frontend

```sql
create view artikel_angebote as
select 
  a.*, 
  json_agg(b) filter (where b.id is not null) as angebote
from artikel a
left join angebot b on a.id = b.artikel_id
group by a.id;
```

## 6️⃣ Rechte

```sql
grant usage on schema suuq to anon;
grant select, insert on artikel to anon;
grant select, insert on angebot to anon;
grant select on artikel_angebote to anon;
```

## 7️⃣ Docker-Compose Setup

### `docker-compose.yml`

```yaml
version: '3.8'

services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: angebotsplattform
    ports:
      - "5432:5432"
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

  postgrest:
    image: postgrest/postgrest:latest
    ports:
      - "3000:3000"
    environment:
      PGRST_DB_URI: postgres://postgres:postgres@db:5432/angebotsplattform
      PGRST_DB_SCHEMA: suuq
      PGRST_DB_ANON_ROLE: anon
      PGRST_OPENAPI_SERVER_PROXY_URI: http://localhost:3000
      PGRST_OPENAPI_MODE: follow-privileges
      PGRST_OPENAPI_PATH: /openapi
```

## 8️⃣ OpenAPI

- OpenAPI-Dokumentation verfügbar unter:  
  `http://localhost:3000/openapi`
- Modus: **follow-privileges** (nur dokumentiert, was freigegeben ist)

## 9️⃣ Angular Frontend

### `angebot-page.ts`

```typescript
import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angebot-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <h1>Artikel & Angebote</h1>

    <div *ngFor="let artikel of artikelListe()">
      <h3>{{ artikel.titel }} ({{ artikel.status }})</h3>
      <p>{{ artikel.beschreibung }}</p>
      <p>Preisvorschlag: {{ artikel.preis_vorschlag | number:'1.2-2' }} €</p>
      
      <ul>
        <li *ngFor="let angebot of artikel.angebote">
          Angebot: {{ angebot.betrag | number:'1.2-2' }} € ({{ angebot.erstellt_am | date:'short' }})
        </li>
      </ul>

      <form (ngSubmit)="neuesAngebot(artikel)">
        <input type="number" step="0.01" [(ngModel)]="neueBetrag[artikel.id]" 
               name="betrag{{artikel.id}}" placeholder="Neues Angebot" required>
        <button type="submit">Bieten</button>
      </form>

      <hr>
    </div>
  \`
})
export class AngebotPage {
  private http = inject(HttpClient);
  artikelListe = signal<any[]>([]);
  neueBetrag: { [key: number]: number } = {};

  constructor() {
    this.ladeDaten();
  }

  ladeDaten() {
    this.http.get<any[]>('http://localhost:3000/artikel_angebote').subscribe(data => {
      this.artikelListe.set(data);
    });
  }

  neuesAngebot(artikel: any) {
    const betrag = this.neueBetrag[artikel.id];
    this.http.post('http://localhost:3000/angebot', {
      artikel_id: artikel.id,
      bietender_id: '1',
      betrag: betrag
    }).subscribe({
      next: () => this.ladeDaten(),
      error: err => alert(err.error.message)
    });
  }
}
```

## 🔐 Sicherheit

### Default-Verhalten

- **Offen für alle**, wenn Rolle `anon` Rechte hat  
- **Kein Token notwendig**, wenn `anon`-Rolle Zugriff hat

### Absicherung

- Rechte entziehen → Zugriff ohne Token wird geblockt
- JWT-Unterstützung für Keycloak kann in Schritt 2 integriert werden

## 🔧 Vorbereitung für Keycloak (Schritt 2)

- `anbieter_id` und `bietender_id` sind `varchar`, um später Keycloak-IDs zu speichern
- In dieser Version: Platzhalter `1` für alle Benutzer

## 📈 Nächste Schritte

| Teil | Thema |
|---|---|
| **Schritt 1 (dieser Kurs)** | API, OpenAPI, Angular-Frontend, Trigger, Schema |
| **Schritt 2** | Keycloak-Integration & JWT |
| **Schritt 3** | Row-Level-Security & Mandantenfähigkeit |
| **Schritt 4** | Erweiterung um Views & RPC |
| **Schritt 5** | Fehlerbehandlung, Real-World-Patterns |

## ✅ Fazit

| Feature | Status |
|---|---|
| Schema `suuq` | ✅ |
| OpenAPI über `/openapi` | ✅ |
| Angular-Frontend mit Biet-Funktion | ✅ |
| Trigger für Preislogik | ✅ |
| Multiuser vorbereitet (Keycloak folgt) | ✅ |
