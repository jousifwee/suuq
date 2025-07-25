export * from './angebot.service';
import { AngebotService } from './angebot.service';
export * from './artikel.service';
import { ArtikelService } from './artikel.service';
export * from './artikelAngebote.service';
import { ArtikelAngeboteService } from './artikelAngebote.service';
export * from './introspection.service';
import { IntrospectionService } from './introspection.service';
export const APIS = [AngebotService, ArtikelService, ArtikelAngeboteService, IntrospectionService];
