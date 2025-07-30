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

{"keys":[{"kid":"h88ZkXA7hKzG7lZIGHL2QD960PfvpP5ECzrjDfL14go","kty":"RSA","alg":"RS256","use":"sig","x5c":["MIIClzCCAX8CBgGYV/4HYzANBgkqhkiG9w0BAQsFADAPMQ0wCwYDVQQDDARzdXVxMB4XDTI1MDcyOTIxMDAyMloXDTM1MDcyOTIxMDIwMlowDzENMAsGA1UEAwwEc3V1cTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAN2y2/NYSLQCsHC2Xt1UYVgOa197YbREq6ziPSApy7oJkd5ezGvi1q5Ikj92wnVGeVXu280NI0ofMHlN/rXyhOjTkNV/wSTu9CbYINKlwS60ZdPQQIfoWxFdtPpskWPcWxvrjP0LnAF4vOdOhCCSqizRXFV/EHHs52aOyz6mXLannTOIFVx2QlLnmpaHIBBR32uneXlj2XSdbu+rpOnNu7HXJEXJSum9pYYcXHD395tdtAEHyljbqIeMfHvRWSH976Cu2H3xrcnv4kjUZCZP7gNLBbTiOLTtNkgIsTgmHuPjM6EARp8033pM5mZu0GjrpfMzSxYy5JxCQxRpxfpBSBECAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAcBJQzuuvvyDskKNO88nvoLdLtkrzs5fgkn6lKCY87dCTVj6FjkEPOpB9hVxpPHedNRKLai+ZL1FYAFgKVNdPp82B/TuHgj32CJW1KYqlV0rsVgqI+af4s8+X0zLWhgr1OTT/3Iump+18LmMHde/HpknhbwFCBC/XErKLWhAsB1wDs45KepB/jdCjNCNyO0otEYihQ7I1rk+c7skAYRzfVQrppgGC3biS32LDGiTKKdfFO5ky082E1ipiEMH6t/PqeWcB2d1EY6LWe1zSVEtxvT2yoQ89lbpxZQeNL57GXEKJA4rZqw5fkMW0Ls5ZqaX6Kn7/P1OJmx8YS90CkMk0AA=="],"x5t":"rUuQSeCezfwfcUz19-0paPZZ7AA","x5t#S256":"2cBYEWY6u1ZmDCXdIPcW64xmRjahZCKWZKw0J6oXl5o","n":"3bLb81hItAKwcLZe3VRhWA5rX3thtESrrOI9ICnLugmR3l7Ma-LWrkiSP3bCdUZ5Ve7bzQ0jSh8weU3-tfKE6NOQ1X_BJO70Jtgg0qXBLrRl09BAh-hbEV20-myRY9xbG-uM_QucAXi8506EIJKqLNFcVX8QceznZo7LPqZctqedM4gVXHZCUuealocgEFHfa6d5eWPZdJ1u76uk6c27sdckRclK6b2lhhxccPf3m120AQfKWNuoh4x8e9FZIf3voK7YffGtye_iSNRkJk_uA0sFtOI4tO02SAixOCYe4-MzoQBGnzTfekzmZm7QaOul8zNLFjLknEJDFGnF-kFIEQ","e":"AQAB"},{"kid":"qiaODm8vsrrLL66B2vt-wJlY68JgMyFZcA58ytrvkyY","kty":"RSA","alg":"RSA-OAEP","use":"enc","x5c":["MIIClzCCAX8CBgGYV/4IUjANBgkqhkiG9w0BAQsFADAPMQ0wCwYDVQQDDARzdXVxMB4XDTI1MDcyOTIxMDAyMloXDTM1MDcyOTIxMDIwMlowDzENMAsGA1UEAwwEc3V1cTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALDhBSKe3pgVkpYUBPvDsxfmrGemmnRnuMO25kL2Q7FeB0K/HtNQilgUFsPGmeNwMuuevjNeu9PZZ9/7/X8nreXKvthct8AhKlW1SGEMkcsaxO1z/jUhzQWgnEMo5pobSvkVncS87w3JKcGaRBxLo4JyTnKVz7TvAZNqSAFLBWr0jmOxOstiWuNtYBzz9/2CTuBrsOSGRirILVZQi9L+St5EXJ910i3SAw9aOTekc9LnEgXKlqaVPAJEZu4u1klKx3DXdl7izR6WAGmBEgHJ+dk7lyfWeZxFu8O5lAaLLQxbIeLNrWC/Y28K76PiIVZO7iQAAZ2pAmbNUIuyJ+qfpGsCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAgl1WRwR/v1pCYJgXiYEG9vXUWffX6siEp7A1Nzm7f4p/lUBaGy5vgN51968kECh63AF01rn7TtWpLhCdWojsUJCBHDMo1kNXLYR80Uvow+1EX6HpPgh83/SRPYdX2534WzNmbB3UwBu9SmEvz/Uv6YvTwVqetwmNjllWmDt9cHHeDcST4q2/5/yzXnvf2yL3R/VBPS7KwR4vU7QmkrYy+JUrw5jR1bGKa1T4i2GD75A6s6gJmMgzv7mILL2O8/481RVU9GkAHBo6m+Xz2AfxbyGLiJlOEgduLQ4tYR+AURoM2dwhK5hWd4JUYbS88tcjQxjqVA+0eYboT1TS+/z+bQ=="],"x5t":"98xbe8t_ceGordBoeo6H4_lg_Ps","x5t#S256":"2xDb38QZMd8Pc6vZPbmlmxwaiWnTBxL0sERB2N0ldeg","n":"sOEFIp7emBWSlhQE-8OzF-asZ6aadGe4w7bmQvZDsV4HQr8e01CKWBQWw8aZ43Ay656-M16709ln3_v9fyet5cq-2Fy3wCEqVbVIYQyRyxrE7XP-NSHNBaCcQyjmmhtK-RWdxLzvDckpwZpEHEujgnJOcpXPtO8Bk2pIAUsFavSOY7E6y2Ja421gHPP3_YJO4Guw5IZGKsgtVlCL0v5K3kRcn3XSLdIDD1o5N6Rz0ucSBcqWppU8AkRm7i7WSUrHcNd2XuLNHpYAaYESAcn52TuXJ9Z5nEW7w7mUBostDFsh4s2tYL9jbwrvo-IhVk7uJAABnakCZs1Qi7In6p-kaw","e":"AQAB"}]}

### RS256 public key
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3bLb81hItAKwcLZe3VRhWA5rX3thtESrrOI9ICnLugmR3l7Ma+LWrkiSP3bCdUZ5Ve7bzQ0jSh8weU3+tfKE6NOQ1X/BJO70Jtgg0qXBLrRl09BAh+hbEV20+myRY9xbG+uM/QucAXi8506EIJKqLNFcVX8QceznZo7LPqZctqedM4gVXHZCUuealocgEFHfa6d5eWPZdJ1u76uk6c27sdckRclK6b2lhhxccPf3m120AQfKWNuoh4x8e9FZIf3voK7YffGtye/iSNRkJk/uA0sFtOI4tO02SAixOCYe4+MzoQBGnzTfekzmZm7QaOul8zNLFjLknEJDFGnF+kFIEQIDAQAB


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

