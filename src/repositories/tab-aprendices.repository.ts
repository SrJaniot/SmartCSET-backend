import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabAprendices, TabAprendicesRelations} from '../models';

export class TabAprendicesRepository extends DefaultCrudRepository<
  TabAprendices,
  typeof TabAprendices.prototype.idAprendiz,
  TabAprendicesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabAprendices, dataSource);
  }
}
