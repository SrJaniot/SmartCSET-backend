import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'tab_contratos_instructor'}
  }
})
export class TabContratosInstructor extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    id: 1,
    postgresql: {columnName: 'num_contrato', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  numContrato: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 4,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'year_contrato', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  yearContrato?: number;

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
    postgresql: {columnName: 'fec_fin', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecFin: string;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'ind_vigente', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indVigente: boolean;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'ind_adicion', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indAdicion: boolean;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabContratosInstructor>) {
    super(data);
  }
}

export interface TabContratosInstructorRelations {
  // describe navigational properties here
}

export type TabContratosInstructorWithRelations = TabContratosInstructor & TabContratosInstructorRelations;
