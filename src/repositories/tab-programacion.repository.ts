import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabProgramacion, TabProgramacionRelations} from '../models';

export class TabProgramacionRepository extends DefaultCrudRepository<
  TabProgramacion,
  typeof TabProgramacion.prototype.idRuta,
  TabProgramacionRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabProgramacion, dataSource);
  }
}
