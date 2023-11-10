import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_fichas'}}
})
export class TabFichas extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_ficha', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idFicha: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'nom_ficha', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomFicha: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'id_programa', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idPrograma: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ind_jornada', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indJornada: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'ind_modalidad', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  indModalidad: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_vocero', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomVocero: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'id_ambiente_base', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idAmbienteBase: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'num_aprendices', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numAprendices: number;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'fec_inicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecInicio: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'fec_fin_lectiva', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecFinLectiva: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'fec_fin_productiva', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecFinProductiva: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'val_duracion', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valDuracion: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'id_instructor_lider', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idInstructorLider: number;

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

  constructor(data?: Partial<TabFichas>) {
    super(data);
  }
}

export interface TabFichasRelations {
  // describe navigational properties here
}

export type TabFichasWithRelations = TabFichas & TabFichasRelations;
