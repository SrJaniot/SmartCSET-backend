import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabAdiContratosInstructor, TabAdiContratosInstructorRelations} from '../models';

export class TabAdiContratosInstructorRepository extends DefaultCrudRepository<
  TabAdiContratosInstructor,
  typeof TabAdiContratosInstructor.prototype.numContrato,
  TabAdiContratosInstructorRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabAdiContratosInstructor, dataSource);
  }
}
