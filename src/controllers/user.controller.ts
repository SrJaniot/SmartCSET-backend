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
import {TabUsers} from '../models';
import {TabUsersRepository} from '../repositories';

export class UserController {
  constructor(
    @repository(TabUsersRepository)
    public tabUsersRepository : TabUsersRepository,
  ) {}

  @post('/tab-users')
  @response(200, {
    description: 'TabUsers model instance',
    content: {'application/json': {schema: getModelSchemaRef(TabUsers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabUsers, {
            title: 'NewTabUsers',
            
          }),
        },
      },
    })
    tabUsers: TabUsers,
  ): Promise<TabUsers> {
    return this.tabUsersRepository.create(tabUsers);
  }

  @get('/tab-users/count')
  @response(200, {
    description: 'TabUsers model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TabUsers) where?: Where<TabUsers>,
  ): Promise<Count> {
    return this.tabUsersRepository.count(where);
  }

  @get('/tab-users')
  @response(200, {
    description: 'Array of TabUsers model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TabUsers, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TabUsers) filter?: Filter<TabUsers>,
  ): Promise<TabUsers[]> {
    return this.tabUsersRepository.find(filter);
  }

  @patch('/tab-users')
  @response(200, {
    description: 'TabUsers PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabUsers, {partial: true}),
        },
      },
    })
    tabUsers: TabUsers,
    @param.where(TabUsers) where?: Where<TabUsers>,
  ): Promise<Count> {
    return this.tabUsersRepository.updateAll(tabUsers, where);
  }

  @get('/tab-users/{id}')
  @response(200, {
    description: 'TabUsers model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TabUsers, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TabUsers, {exclude: 'where'}) filter?: FilterExcludingWhere<TabUsers>
  ): Promise<TabUsers> {
    return this.tabUsersRepository.findById(id, filter);
  }

  @patch('/tab-users/{id}')
  @response(204, {
    description: 'TabUsers PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TabUsers, {partial: true}),
        },
      },
    })
    tabUsers: TabUsers,
  ): Promise<void> {
    await this.tabUsersRepository.updateById(id, tabUsers);
  }

  @put('/tab-users/{id}')
  @response(204, {
    description: 'TabUsers PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tabUsers: TabUsers,
  ): Promise<void> {
    await this.tabUsersRepository.replaceById(id, tabUsers);
  }

  @del('/tab-users/{id}')
  @response(204, {
    description: 'TabUsers DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tabUsersRepository.deleteById(id);
  }
}
