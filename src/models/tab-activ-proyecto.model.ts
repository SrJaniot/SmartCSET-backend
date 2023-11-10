import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'tab_activ_proyecto'}
  }
})
export class TabActivProyecto extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false ,
    id: 1,
    postgresql: {columnName: 'id_actividad', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  idActividad: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false ,
    postgresql: {columnName: 'nom_actividad', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  nomActividad: string;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabActivProyecto>) {
    super(data);
  }
}

export interface TabActivProyectoRelations {
  // describe navigational properties here
}

export type TabActivProyectoWithRelations = TabActivProyecto & TabActivProyectoRelations;
