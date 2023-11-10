import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TabSedes} from '../models';
import {TabSedesRepository} from '../repositories';

export class SedeController {
  constructor(
    @repository(TabSedesRepository)
    public tabSedesRepository : TabSedesRepository,
  ) {}

  @post('/tab-sedes')
  @response(200, {
    description: 'TabSedes model instance',
    content: {'application/json': {schema: getModelSchemaRef(TabSedes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabSedes, {
            title: 'NewTabSedes',
            
          }),
        },
      },
    })
    tabSedes: TabSedes,
  ): Promise<TabSedes> {
    return this.tabSedesRepository.create(tabSedes);
  }

  @get('/tab-sedes/count')
  @response(200, {
    description: 'TabSedes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TabSedes) where?: Where<TabSedes>,
  ): Promise<Count> {
    return this.tabSedesRepository.count(where);
  }

  @get('/tab-sedes')
  @response(200, {
    description: 'Array of TabSedes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TabSedes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TabSedes) filter?: Filter<TabSedes>,
  ): Promise<TabSedes[]> {
    return this.tabSedesRepository.find(filter);
  }

  @patch('/tab-sedes')
  @response(200, {
    description: 'TabSedes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabSedes, {partial: true}),
        },
      },
    })
    tabSedes: TabSedes,
    @param.where(TabSedes) where?: Where<TabSedes>,
  ): Promise<Count> {
    return this.tabSedesRepository.updateAll(tabSedes, where);
  }

  @get('/tab-sedes/{id}')
  @response(200, {
    description: 'TabSedes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TabSedes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TabSedes, {exclude: 'where'}) filter?: FilterExcludingWhere<TabSedes>
  ): Promise<TabSedes> {
    return this.tabSedesRepository.findById(id, filter);
  }

  @patch('/tab-sedes/{id}')
  @response(204, {
    description: 'TabSedes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabSedes, {partial: true}),
        },
      },
    })
    tabSedes: TabSedes,
  ): Promise<void> {
    await this.tabSedesRepository.updateById(id, tabSedes);
  }

  @put('/tab-sedes/{id}')
  @response(204, {
    description: 'TabSedes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tabSedes: TabSedes,
  ): Promise<void> {
    await this.tabSedesRepository.replaceById(id, tabSedes);
  }

  @del('/tab-sedes/{id}')
  @response(204, {
    description: 'TabSedes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tabSedesRepository.deleteById(id);
  }
}
