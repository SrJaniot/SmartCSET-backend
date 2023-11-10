import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_instructores'}}
})
export class TabInstructores extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_instructor', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idInstructor: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom1_instructor', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nom1Instructor: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'nom2_instructor', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  nom2Instructor?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'ape1_instructor', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  ape1Instructor: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    postgresql: {columnName: 'ape2_instructor', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  ape2Instructor?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'id_dpto', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idDpto: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'id_ciudad', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idCiudad: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'id_regional', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRegional: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'id_centro', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCentro: number;

  @property({
    type: 'boolean',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'ind_tipo_contrato', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  indTipoContrato?: boolean;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'num_contrato', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  numContrato: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated:false ,
    postgresql: {columnName: 'datos_instructor', dataType: 'USER-DEFINED', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  datosInstructor?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ind_genero', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indGenero: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'ind_est_civil', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indEstCivil: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'id_profesion', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idProfesion: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'id_red', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRed: number;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'ind_est_formación', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indEstFormaciN: boolean;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ind_estado', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indEstado: number;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabInstructores>) {
    super(data);
  }
}

export interface TabInstructoresRelations {
  // describe navigational properties here
}

export type TabInstructoresWithRelations = TabInstructores & TabInstructoresRelations;
