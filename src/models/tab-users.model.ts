import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tab_users'}}
})
export class TabUsers extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    id: 1,
    postgresql: {columnName: 'id_usuario', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  idUsuario: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 32,
    generated:false ,
    postgresql: {columnName: 'val_password', dataType: 'character varying', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  valPassword: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated:false ,
    postgresql: {columnName: 'val_correo_recup', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  valCorreoRecup: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TabUsers>) {
    super(data);
  }
}

export interface TabUsersRelations {
  // describe navigational properties here
}

export type TabUsersWithRelations = TabUsers & TabUsersRelations;
