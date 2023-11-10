import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabRegionales, TabRegionalesRelations} from '../models';

export class TabRegionalesRepository extends DefaultCrudRepository<
  TabRegionales,
  typeof TabRegionales.prototype.idRegional,
  TabRegionalesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabRegionales, dataSource);
  }
}
