import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_borrados'}}
})
export class TabBorrados extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_consec', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idConsec: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_tabla', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomTabla: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'usr_insert', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  usrInsert: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'fec_insert', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecInsert: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabBorrados>) {
    super(data);
  }
}

export interface TabBorradosRelations {
  // describe navigational properties here
}

export type TabBorradosWithRelations = TabBorrados & TabBorradosRelations;
