/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { angebot } from '../models/angebot';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AngebotService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id
     * @param artikelId
     * @param bietenderId
     * @param betrag
     * @param erstelltAm
     * @param select Filtering Columns
     * @param order Ordering
     * @param range Limiting and Pagination
     * @param rangeUnit Limiting and Pagination
     * @param offset Limiting and Pagination
     * @param limit Limiting and Pagination
     * @param prefer Preference
     * @returns angebot OK
     * @returns any Partial Content
     * @throws ApiError
     */
    public getAngebot(
        id?: string,
        artikelId?: string,
        bietenderId?: string,
        betrag?: string,
        erstelltAm?: string,
        select?: string,
        order?: string,
        range?: string,
        rangeUnit: string = 'items',
        offset?: string,
        limit?: string,
        prefer?: 'count=none',
    ): CancelablePromise<Array<angebot> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/angebot',
            headers: {
                'Range': range,
                'Range-Unit': rangeUnit,
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'artikel_id': artikelId,
                'bietender_id': bietenderId,
                'betrag': betrag,
                'erstellt_am': erstelltAm,
                'select': select,
                'order': order,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * @param angebot angebot
     * @param select Filtering Columns
     * @param prefer Preference
     * @returns any Created
     * @throws ApiError
     */
    public postAngebot(
        angebot?: angebot,
        select?: string,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none' | 'resolution=ignore-duplicates' | 'resolution=merge-duplicates',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/angebot',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'select': select,
            },
            body: angebot,
        });
    }
    /**
     * @param id
     * @param artikelId
     * @param bietenderId
     * @param betrag
     * @param erstelltAm
     * @param prefer Preference
     * @returns void
     * @throws ApiError
     */
    public deleteAngebot(
        id?: string,
        artikelId?: string,
        bietenderId?: string,
        betrag?: string,
        erstelltAm?: string,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/angebot',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'artikel_id': artikelId,
                'bietender_id': bietenderId,
                'betrag': betrag,
                'erstellt_am': erstelltAm,
            },
        });
    }
    /**
     * @param id
     * @param artikelId
     * @param bietenderId
     * @param betrag
     * @param erstelltAm
     * @param angebot angebot
     * @param prefer Preference
     * @returns void
     * @throws ApiError
     */
    public patchAngebot(
        id?: string,
        artikelId?: string,
        bietenderId?: string,
        betrag?: string,
        erstelltAm?: string,
        angebot?: angebot,
        prefer?: 'return=representation' | 'return=minimal' | 'return=none',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/angebot',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'id': id,
                'artikel_id': artikelId,
                'bietender_id': bietenderId,
                'betrag': betrag,
                'erstellt_am': erstelltAm,
            },
            body: angebot,
        });
    }
}
