/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { artikel_angebote } from '../models/artikel_angebote';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtikelAngeboteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id
     * @param titel
     * @param beschreibung
     * @param anbieterId
     * @param preisVorschlag
     * @param status
     * @param angelegtAm
     * @param angebote
     * @param select Filtering Columns
     * @param order Ordering
     * @param range Limiting and Pagination
     * @param rangeUnit Limiting and Pagination
     * @param offset Limiting and Pagination
     * @param limit Limiting and Pagination
     * @param prefer Preference
     * @returns artikel_angebote OK
     * @returns any Partial Content
     * @throws ApiError
     */
    public getArtikelAngebote(
        id?: string,
        titel?: string,
        beschreibung?: string,
        anbieterId?: string,
        preisVorschlag?: string,
        status?: string,
        angelegtAm?: string,
        angebote?: string,
        select?: string,
        order?: string,
        range?: string,
        rangeUnit: string = 'items',
        offset?: string,
        limit?: string,
        prefer?: 'count=none',
    ): CancelablePromise<Array<artikel_angebote> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/artikel_angebote',
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
                'angebote': angebote,
                'select': select,
                'order': order,
                'offset': offset,
                'limit': limit,
            },
        });
    }
}
