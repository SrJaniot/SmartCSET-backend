import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_evidencias'}}
})
export class TabEvidencias extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_evidencia', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idEvidencia: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'nom_evidencia', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomEvidencia: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 3,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'val_nota_maxima', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valNotaMaxima: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 3,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'val_nota_minima', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  valNotaMinima: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabEvidencias>) {
    super(data);
  }
}

export interface TabEvidenciasRelations {
  // describe navigational properties here
}

export type TabEvidenciasWithRelations = TabEvidencias & TabEvidenciasRelations;
