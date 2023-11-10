import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_competencias'}}
})
export class TabCompetencias extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_competencia', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idCompetencia: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'nom_competencia', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomCompetencia: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 2,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'num_raps', dataType: 'numeric', dataLength: null, dataPrecision: 2, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numRaps: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 4,
    scale: 0,
    generated:false ,
    postgresql: {columnName: 'num_horas', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numHoras: number;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'ind_transversal', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  indTransversal: boolean;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabCompetencias>) {
    super(data);
  }
}

export interface TabCompetenciasRelations {
  // describe navigational properties here
}

export type TabCompetenciasWithRelations = TabCompetencias & TabCompetenciasRelations;
