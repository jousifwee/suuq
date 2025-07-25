/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type angebot = {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `artikel.id`.<fk table='artikel' column='id'/>
     */
    artikel_id?: number;
    bietender_id: string;
    betrag: number;
    erstellt_am?: string;
};

