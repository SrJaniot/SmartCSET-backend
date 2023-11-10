import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_pmtros'}}
})
export class TabPmtros extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_centro', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCentro: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ano_academico', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  anoAcademico: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'mes_academico', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  mesAcademico: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 3,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'val_nota_minima', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valNotaMinima: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 3,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'val_horas_instructor', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valHorasInstructor: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'tel_sena', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  telSena: number;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabPmtros>) {
    super(data);
  }
}

export interface TabPmtrosRelations {
  // describe navigational properties here
}

export type TabPmtrosWithRelations = TabPmtros & TabPmtrosRelations;
