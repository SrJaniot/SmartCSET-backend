import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_aprendices'}}
})
export class TabAprendices extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_aprendiz', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idAprendiz: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'ind_tipo_documento', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indTipoDocumento: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'nom1_aprendiz', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nom1Aprendiz: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'nom2_aprendiz', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  nom2Aprendiz?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'ape1_aprendiz', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  ape1Aprendiz: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    postgresql: {columnName: 'ape2_aprendiz', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  ape2Aprendiz?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'datos_aprendiz', dataType: 'USER-DEFINED', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  datosAprendiz?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ind_etdo_formacion', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indEtdoFormacion: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabAprendices>) {
    super(data);
  }
}

export interface TabAprendicesRelations {
  // describe navigational properties here
}

export type TabAprendicesWithRelations = TabAprendices & TabAprendicesRelations;
