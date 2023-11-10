import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_ambientes'}}
})
export class TabAmbientes extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_ambiente', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idAmbiente: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'nom_ambiente', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomAmbiente: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated: false ,
    postgresql: {columnName: 'id_regional', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRegional: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated: false ,
    postgresql: {columnName: 'id_centro', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCentro: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false ,
    postgresql: {columnName: 'id_sede', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idSede: number;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'ind_disponible_man', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indDisponibleMan: boolean;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'ind_disponible_tar', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indDisponibleTar: boolean;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'ind_disponible_noc', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indDisponibleNoc: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    postgresql: {columnName: 'inventario_ambiente', dataType: 'USER-DEFINED', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  inventarioAmbiente?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'equipos_ambiente', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  equiposAmbiente?: string;

 

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabAmbientes>) {
    super(data);
  }
}

export interface TabAmbientesRelations {
  // describe navigational properties here
}

export type TabAmbientesWithRelations = TabAmbientes & TabAmbientesRelations;
