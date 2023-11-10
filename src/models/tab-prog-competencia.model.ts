import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'tab_prog_competencia'}
  }
})
export class TabProgCompetencia extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_ruta', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRuta: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 2,
    postgresql: {columnName: 'id_ficha', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idFicha: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 1,
    scale: 0,
    generated:false ,
    id: 3,
    postgresql: {columnName: 'id_fase', dataType: 'numeric', dataLength: null, dataPrecision: 1, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idFase: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated:false ,
    id: 4,
    postgresql: {columnName: 'id_competencia', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCompetencia: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 5,
    postgresql: {columnName: 'id_instructor', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idInstructor: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 6,
    postgresql: {columnName: 'id_actividad', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idActividad: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    id: 7,
    postgresql: {columnName: 'id_rap', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRap: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'val_dias', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valDias: number;

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
    postgresql: {columnName: 'fec_final', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecFinal: string;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabProgCompetencia>) {
    super(data);
  }
}

export interface TabProgCompetenciaRelations {
  // describe navigational properties here
}

export type TabProgCompetenciaWithRelations = TabProgCompetencia & TabProgCompetenciaRelations;
