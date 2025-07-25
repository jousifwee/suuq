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