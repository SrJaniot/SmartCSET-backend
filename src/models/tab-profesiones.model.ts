import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_profesiones'}}
})
export class TabProfesiones extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_profesion', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idProfesion: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},

    generated: false,
    postgresql: {columnName: 'nom_profesion', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomProfesion: string;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabProfesiones>) {
    super(data);
  }
}

export interface TabProfesionesRelations {
  // describe navigational properties here
}

export type TabProfesionesWithRelations = TabProfesiones & TabProfesionesRelations;
