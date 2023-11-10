import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabRaps, TabRapsRelations} from '../models';

export class TabRapsRepository extends DefaultCrudRepository<
  TabRaps,
  typeof TabRaps.prototype.idRap,
  TabRapsRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabRaps, dataSource);
  }
}
