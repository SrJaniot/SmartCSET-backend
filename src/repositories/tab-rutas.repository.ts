import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TabRutas, TabRutasRelations} from '../models';

export class TabRutasRepository extends DefaultCrudRepository<
  TabRutas,
  typeof TabRutas.prototype.idRuta,
  TabRutasRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TabRutas, dataSource);
  }
}
