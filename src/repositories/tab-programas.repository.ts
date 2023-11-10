import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabProgramas, TabProgramasRelations} from '../models';

export class TabProgramasRepository extends DefaultCrudRepository<
  TabProgramas,
  typeof TabProgramas.prototype.idPrograma,
  TabProgramasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabProgramas, dataSource);
  }
}
