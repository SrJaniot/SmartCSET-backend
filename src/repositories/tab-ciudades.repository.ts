import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabCiudades, TabCiudadesRelations} from '../models';

export class TabCiudadesRepository extends DefaultCrudRepository<
  TabCiudades,
  typeof TabCiudades.prototype.idDpto,
  TabCiudadesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabCiudades, dataSource);
  }
}
