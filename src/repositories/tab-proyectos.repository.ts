import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabProyectos, TabProyectosRelations} from '../models';

export class TabProyectosRepository extends DefaultCrudRepository<
  TabProyectos,
  typeof TabProyectos.prototype.idProyecto,
  TabProyectosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabProyectos, dataSource);
  }
}
