import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabCompetInstructor, TabCompetInstructorRelations} from '../models';

export class TabCompetInstructorRepository extends DefaultCrudRepository<
  TabCompetInstructor,
  typeof TabCompetInstructor.prototype.idInstructor,
  TabCompetInstructorRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabCompetInstructor, dataSource);
  }
}
