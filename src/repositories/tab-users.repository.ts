import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabUsers, TabUsersRelations} from '../models';

export class TabUsersRepository extends DefaultCrudRepository<
  TabUsers,
  typeof TabUsers.prototype.idUsuario,
  TabUsersRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabUsers, dataSource);
  }
}
