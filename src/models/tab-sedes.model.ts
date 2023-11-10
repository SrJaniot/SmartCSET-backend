import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_sedes'}}
})
export class TabSedes extends Entity {
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
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated: false,
    id: 2,
    postgresql: {columnName: 'id_centro', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCentro: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false,
    id: 3,
    postgresql: {columnName: 'id_sede', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idSede: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'nom_sede', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomSede: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'dir_sede', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dirSede: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_encargado', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomEncargado: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tel_sede', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  telSede: number;

  

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabSedes>) {
    super(data);
  }
}

export interface TabSedesRelations {
  // describe navigational properties here
}

export type TabSedesWithRelations = TabSedes & TabSedesRelations;
