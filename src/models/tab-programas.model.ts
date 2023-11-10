import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_programas'}}
})
export class TabProgramas extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 8,
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_programa', dataType: 'numeric', dataLength: null, dataPrecision: 8, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idPrograma: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'nom_programa', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomPrograma: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'num_snies', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  numSnies: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'num_version', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numVersion: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'ind_tipo', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indTipo: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'val_duracion_lect', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valDuracionLect: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'val_duracion_prod', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valDuracionProd: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabProgramas>) {
    super(data);
  }
}

export interface TabProgramasRelations {
  // describe navigational properties here
}

export type TabProgramasWithRelations = TabProgramas & TabProgramasRelations;
