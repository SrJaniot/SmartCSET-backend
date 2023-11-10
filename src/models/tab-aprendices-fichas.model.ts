import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'tab_aprendices_fichas'}
  }
})
export class TabAprendicesFichas extends Entity {
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
    postgresql: {columnName: 'id_aprendiz', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idAprendiz: number;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabAprendicesFichas>) {
    super(data);
  }
}

export interface TabAprendicesFichasRelations {
  // describe navigational properties here
}

export type TabAprendicesFichasWithRelations = TabAprendicesFichas & TabAprendicesFichasRelations;
