import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabEvidRap, TabEvidRapRelations} from '../models';

export class TabEvidRapRepository extends DefaultCrudRepository<
  TabEvidRap,
  typeof TabEvidRap.prototype.idRap,
  TabEvidRapRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabEvidRap, dataSource);
  }
}
