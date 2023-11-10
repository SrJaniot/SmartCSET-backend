import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabSedes, TabSedesRelations} from '../models';

export class TabSedesRepository extends DefaultCrudRepository<
  TabSedes,
  typeof TabSedes.prototype.idRegional,
  TabSedesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabSedes, dataSource);
  }
}
