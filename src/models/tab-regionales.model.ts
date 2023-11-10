import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_regionales'}}
})
export class TabRegionales extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_regional', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRegional: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_regional', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomRegional: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'dir_regional', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dirRegional: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'num_extension_tel', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numExtensionTel: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_director', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomDirector: string;

  

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabRegionales>) {
    super(data);
  }
}

export interface TabRegionalesRelations {
  // describe navigational properties here
}

export type TabRegionalesWithRelations = TabRegionales & TabRegionalesRelations;
