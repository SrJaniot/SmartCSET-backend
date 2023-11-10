import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_raps'}}
})
export class TabRaps extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_rap', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idRap: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    postgresql: {columnName: 'nom_rap', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomRap: string;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabRaps>) {
    super(data);
  }
}

export interface TabRapsRelations {
  // describe navigational properties here
}

export type TabRapsWithRelations = TabRaps & TabRapsRelations;
