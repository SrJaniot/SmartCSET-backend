import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabCompetFicha, TabCompetFichaRelations} from '../models';

export class TabCompetFichaRepository extends DefaultCrudRepository<
  TabCompetFicha,
  typeof TabCompetFicha.prototype.idFicha,
  TabCompetFichaRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabCompetFicha, dataSource);
  }
}
