import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_compet_ficha'}}
})
export class TabCompetFicha extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_ficha', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idFicha: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    id: 2,
    postgresql: {columnName: 'id_competencia', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCompetencia: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabCompetFicha>) {
    super(data);
  }
}

export interface TabCompetFichaRelations {
  // describe navigational properties here
}

export type TabCompetFichaWithRelations = TabCompetFicha & TabCompetFichaRelations;
