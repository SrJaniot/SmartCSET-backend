import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabRedes, TabRedesRelations} from '../models';

export class TabRedesRepository extends DefaultCrudRepository<
  TabRedes,
  typeof TabRedes.prototype.idRed,
  TabRedesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabRedes, dataSource);
  }
}
