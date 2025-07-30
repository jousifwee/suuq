# suuq Angebotsplattform - Schulungsprojekt

## Backend (Docker + PostgREST)

- PostgreSQL mit Init-Skript
- PostgREST API mit OpenAPI
- Trigger für Angebotslogik

### Starten:

```bash
docker-compose up
```

openapi gui unter 
http://localhost:8246

## Zertifikate vom keycloak
http://localhost:8080/realms/suuq/protocol/openid-connect/certs




## Sonstiges
### Rest Aufrufe mit dem VS Code RestClient
- REST-CALLS.http

### die GUI
- frontend
- starten
```
cd frontend
ng serve
```

## Client generieren openapi-typescript-codegen !!wird nicht gut gewartet
https://github.com/ferdikoomen/openapi-typescript-codegen

https://github.com/ferdikoomen/openapi-typescript-codegen/wiki


npm install -g openapi-typescript-codegen

npx openapi-typescript-codegen \
  --input http://localhost:3000/ \
  --output ./src/app/postgrest-client \
  --client fetch \
  --name PostgrestClient



## aktueller client generator
npm install @openapitools/openapi-generator-cli -g

openapi-generator-cli generate \
  -i http://localhost:3000 \
  -g typescript-angular \
  -o src/app/postgrest-api \
  --additional-properties=providedInRoot=true,ngVersion=20.0.0


## keycloak im gui
npm install keycloak-js

#  Keycloak im Docker Compose

## 0. nutzer
| Benutzername | Passwort | Rolle(n)     | Gruppe(n)            | E-Mail                        |
|--------------|----------|--------------|----------------------|-------------------------------|
| user1        | pw1      | admin        | –                    | nico.wulff@itz-rostock.de     |
| user2        | pw2      | anwender     | angugger             | nico.wulff@itz-rostock.de     |
| user3        | pw3      | anwender     | angugger, bieter     | nico.wulff@itz-rostock.de     |


## 1. Voraussetzungen

- Docker & Docker Compose installiert
- Arbeitsverzeichnis auf dem Zielsystem
- Dateien:
  - `docker-compose.yml` (Keycloak-Konfiguration)
  - `keycloak-realm.json` (Realm, Benutzer, Rollen, Gruppen)
  - (Leerer) Ordner für persistente Daten, z.B. `./keycloak-h2-data`

---

## 2. Installation & Erstinbetriebnahme

1. **Dateien vorbereiten:**  
   - Lege `docker-compose.yml` und `keycloak-realm.json` ins Arbeitsverzeichnis.
   - Erstelle einen Ordner für die persistente H2-Datenbank (z.B. `./keycloak-h2-data`).

2. **Docker Compose Stack starten:**  
   ```sh
   docker compose up

Beim ersten Start importiert Keycloak automatisch die Benutzer, Rollen und Gruppen aus der keycloak-realm.json.

Die H2-Datenbank wird in den lokalen Ordner geschrieben und bleibt erhalten.

Zugriff auf Keycloak:

Web-Interface erreichbar unter http://localhost:8080/

Admin-Zugangsdaten siehe Compose-Datei (Standard: admin/admin)

3. Benutzer, Rollen & Gruppen
Initial werden über das JSON-Import alle gewünschten Benutzer, Rollen und Gruppen automatisch angelegt.

Die Zuordnung (z.B. welcher User in welcher Gruppe/Rolle) ist in der keycloak-realm.json definiert.

Alle Benutzer erhalten eine einheitliche E-Mail-Adresse für Testzwecke.

Änderungen an der Struktur können jederzeit durch Anpassung der JSON-Datei und erneuten Import erfolgen.



4. E-Mail-Setup (SMTP)
Keycloak ist so konfiguriert, dass Mails über einen externen SMTP-Server (z.B. zti7, Port 25, ohne Authentifizierung) versendet werden.

Die Absenderadresse ist für alle Systemmails einheitlich gesetzt.

Um E-Mail-Funktionalität zu testen (Passwort zurücksetzen, Verifizierungs-Mails etc.), im Keycloak Admin-UI entsprechende Aktionen auslösen.

5. Persistenz & Backup
Die interne H2-Datenbank von Keycloak wird per Bind-Mount in einen lokalen Ordner geschrieben.

Dadurch bleiben alle Daten (Benutzer, Gruppen etc.) auch nach Neustart oder Update des Containers erhalten.

Für eine vollständige Sicherung genügt ein Backup des Ordners (z.B. ./keycloak-h2-data).

Vorsicht: Wird der Ordner manuell gelöscht, gehen alle Daten verloren.

6. System zurücksetzen
Für einen vollständigen Reset (z.B. um Änderungen an der Realm-Struktur erneut zu importieren):

sh

docker compose down -v
docker compose up

Dabei würden alle internen Docker-Volumes gelöscht.

Achtung: Lokale Bind-Mounts (z.B. ./keycloak-h2-data) müssen manuell entfernt werden, falls gewünscht.

7. Administration
Benutzer, Gruppen, Rollen, E-Mail-Vorlagen etc. können nach Erstinstallation direkt im Keycloak-Admin-UI verwaltet werden.

Weitere Anpassungen können durch erneuten Import einer geänderten keycloak-realm.json erfolgen.

8. Hinweise für Produktion
Für den Produktivbetrieb wird der Einsatz einer externen, robusten Datenbank wie PostgreSQL empfohlen.

Die Konfiguration von E-Mail (SMTP) sollte auf Sicherheit geprüft werden (TLS, Authentifizierung).

Regelmäßige Backups der persistierten Daten dringend empfohlen!

