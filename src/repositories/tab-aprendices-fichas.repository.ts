import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabAprendicesFichas, TabAprendicesFichasRelations} from '../models';

export class TabAprendicesFichasRepository extends DefaultCrudRepository<
  TabAprendicesFichas,
  typeof TabAprendicesFichas.prototype.idFicha,
  TabAprendicesFichasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabAprendicesFichas, dataSource);
  }
}
