import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabDptos, TabDptosRelations} from '../models';

export class TabDptosRepository extends DefaultCrudRepository<
  TabDptos,
  typeof TabDptos.prototype.idDpto,
  TabDptosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabDptos, dataSource);
  }
}
