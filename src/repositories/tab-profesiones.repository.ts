import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabProfesiones, TabProfesionesRelations} from '../models';

export class TabProfesionesRepository extends DefaultCrudRepository<
  TabProfesiones,
  typeof TabProfesiones.prototype.idProfesion,
  TabProfesionesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabProfesiones, dataSource);
  }
}
