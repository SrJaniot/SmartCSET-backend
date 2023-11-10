import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabPmtros, TabPmtrosRelations} from '../models';

export class TabPmtrosRepository extends DefaultCrudRepository<
  TabPmtros,
  typeof TabPmtros.prototype.idCentro,
  TabPmtrosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabPmtros, dataSource);
  }
}
