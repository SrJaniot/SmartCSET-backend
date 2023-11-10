import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabEvidencias, TabEvidenciasRelations} from '../models';

export class TabEvidenciasRepository extends DefaultCrudRepository<
  TabEvidencias,
  typeof TabEvidencias.prototype.idEvidencia,
  TabEvidenciasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabEvidencias, dataSource);
  }
}
