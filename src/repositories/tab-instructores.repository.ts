import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabInstructores, TabInstructoresRelations} from '../models';

export class TabInstructoresRepository extends DefaultCrudRepository<
  TabInstructores,
  typeof TabInstructores.prototype.idInstructor,
  TabInstructoresRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabInstructores, dataSource);
  }
}
