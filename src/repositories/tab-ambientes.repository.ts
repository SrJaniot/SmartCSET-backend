import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabAmbientes, TabAmbientesRelations} from '../models';

export class TabAmbientesRepository extends DefaultCrudRepository<
  TabAmbientes,
  typeof TabAmbientes.prototype.idAmbiente,
  TabAmbientesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabAmbientes, dataSource);
  }
}
