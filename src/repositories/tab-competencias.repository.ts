import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabCompetencias, TabCompetenciasRelations} from '../models';

export class TabCompetenciasRepository extends DefaultCrudRepository<
  TabCompetencias,
  typeof TabCompetencias.prototype.idCompetencia,
  TabCompetenciasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabCompetencias, dataSource);
  }
}
