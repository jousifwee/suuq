/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntrospectionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * OpenAPI description (this document)
     * @returns any OK
     * @throws ApiError
     */
    public get(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }
}
