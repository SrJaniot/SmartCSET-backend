import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabFichas, TabFichasRelations} from '../models';

export class TabFichasRepository extends DefaultCrudRepository<
  TabFichas,
  typeof TabFichas.prototype.idFicha,
  TabFichasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabFichas, dataSource);
  }
}
