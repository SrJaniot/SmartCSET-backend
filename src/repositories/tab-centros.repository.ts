import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabCentros, TabCentrosRelations} from '../models';

export class TabCentrosRepository extends DefaultCrudRepository<
  TabCentros,
  typeof TabCentros.prototype.idRegional,
  TabCentrosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabCentros, dataSource);
  }
}
