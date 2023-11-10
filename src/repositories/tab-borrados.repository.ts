import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabBorrados, TabBorradosRelations} from '../models';

export class TabBorradosRepository extends DefaultCrudRepository<
  TabBorrados,
  typeof TabBorrados.prototype.idConsec,
  TabBorradosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabBorrados, dataSource);
  }
}
