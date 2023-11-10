import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabContratosInstructor, TabContratosInstructorRelations} from '../models';

export class TabContratosInstructorRepository extends DefaultCrudRepository<
  TabContratosInstructor,
  typeof TabContratosInstructor.prototype.numContrato,
  TabContratosInstructorRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabContratosInstructor, dataSource);
  }
}
