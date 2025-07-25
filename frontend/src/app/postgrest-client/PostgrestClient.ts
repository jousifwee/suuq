/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AngebotService } from './services/AngebotService';
import { ArtikelService } from './services/ArtikelService';
import { ArtikelAngeboteService } from './services/ArtikelAngeboteService';
import { IntrospectionService } from './services/IntrospectionService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PostgrestClient {
    public readonly angebot: AngebotService;
    public readonly artikel: ArtikelService;
    public readonly artikelAngebote: ArtikelAngeboteService;
    public readonly introspection: IntrospectionService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://127.0.0.1:3000',
            VERSION: config?.VERSION ?? '13.0.4',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.angebot = new AngebotService(this.request);
        this.artikel = new ArtikelService(this.request);
        this.artikelAngebote = new ArtikelAngeboteService(this.request);
        this.introspection = new IntrospectionService(this.request);
    }
}

