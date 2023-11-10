import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_centros'}}
})
export class TabCentros extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated: false ,
    id: 1,
    postgresql: {columnName: 'id_regional', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRegional: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated:false  ,
    id: 2,
    postgresql: {columnName: 'id_centro', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCentro: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'nom_centro', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomCentro: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'dir_centro', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dirCentro: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false ,
    postgresql: {columnName: 'num_extension_tel', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numExtensionTel: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'nom_subdirector', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomSubdirector: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabCentros>) {
    super(data);
  }
}

export interface TabCentrosRelations {
  // describe navigational properties here
}

export type TabCentrosWithRelations = TabCentros & TabCentrosRelations;
