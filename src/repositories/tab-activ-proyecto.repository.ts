import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabActivProyecto, TabActivProyectoRelations} from '../models';

export class TabActivProyectoRepository extends DefaultCrudRepository<
  TabActivProyecto,
  typeof TabActivProyecto.prototype.idActividad,
  TabActivProyectoRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabActivProyecto, dataSource);
  }
}
