import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabProgCompetencia, TabProgCompetenciaRelations} from '../models';

export class TabProgCompetenciaRepository extends DefaultCrudRepository<
  TabProgCompetencia,
  typeof TabProgCompetencia.prototype.idRuta,
  TabProgCompetenciaRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabProgCompetencia, dataSource);
  }
}
