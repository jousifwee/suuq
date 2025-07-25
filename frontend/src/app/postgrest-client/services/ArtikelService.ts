/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { artikel } from '../models/artikel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtikelService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id
     * @param titel
     * @param beschreibung
     * @param anbieterId
     * @param preisVorschlag
     * @param status
     * @param angelegtAm
     * @param select Filtering Columns
     * @param order Ordering
     * @param range Limiting and Pagination
     * @param rangeUnit Limiting and Pagination
     * @param offset Limiting and Pagination
     * @param limit Limiting and Pagination
     * @param prefer Preference
     * @returns artikel OK
     * @returns any Partial Content
     * @throws ApiError
     */
    public getArtikel(
        id?: string,
        titel?: string,
        beschreibung?: string,
        anbieterId?: string,
        preisVorschlag?: string,
        status?: string,
        angelegtAm?: string,
        select?: string,
        order?: string,
        range?: string,
        rangeUnit: string = 'items',
        offset?: string,
        limit?: string,
        prefer?: 'count=none',
    ): CancelablePromise<Array<artikel> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/artikel',
            headers: {
                'Range': range,
                'Range-Unit': rangeUnit,
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'titel': titel,
                'beschreibung': beschreibung,
                'anbieter_id': anbieterId,
                'preis_vorschlag': preisVorschlag,
                'status': status,
                'angelegt_am': angelegtAm,
                'select': select,
                'order': order,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * @param artikel artikel
     * @param select Filtering Columns
     * @param prefer Preference
     * @returns any Created
     * @throws ApiError
     */
    public postArtikel(
        artikel?: artikel,
        select?: string,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none' | 'resolution=ignore-duplicates' | 'resolution=merge-duplicates',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/artikel',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'select': select,
            },
            body: artikel,
        });
    }
    /**
     * @param id
     * @param titel
     * @param beschreibung
     * @param anbieterId
     * @param preisVorschlag
     * @param status
     * @param angelegtAm
     * @param prefer Preference
     * @returns void
     * @throws ApiError
     */
    public deleteArtikel(
        id?: string,
        titel?: string,
        beschreibung?: string,
        anbieterId?: string,
        preisVorschlag?: string,
        status?: string,
        angelegtAm?: string,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/artikel',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'titel': titel,
                'beschreibung': beschreibung,
                'anbieter_id': anbieterId,
                'preis_vorschlag': preisVorschlag,
                'status': status,
                'angelegt_am': angelegtAm,
            },
        });
    }
    /**
     * @param id
     * @param titel
     * @param beschreibung
     * @param anbieterId
     * @param preisVorschlag
     * @param status
     * @param angelegtAm
     * @param artikel artikel
     * @param prefer Preference
     * @returns void
     * @throws ApiError
     */
    public patchArtikel(
        id?: string,
        titel?: string,
        beschreibung?: string,
        anbieterId?: string,
        preisVorschlag?: string,
        status?: string,
        angelegtAm?: string,
        artikel?: artikel,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/artikel',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'titel': titel,
                'beschreibung': beschreibung,
                'anbieter_id': anbieterId,
                'preis_vorschlag': preisVorschlag,
                'status': status,
                'angelegt_am': angelegtAm,
            },
            body: artikel,
        });
    }
}
