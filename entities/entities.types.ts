import { deserialize } from '@tsed/json-mapper'
import { CollectionOf, Default, Description, Example, Optional, Required } from '@tsed/schema'

import { EntityTarget } from './entitiesTarget.types'

export const enum EntityType {
  SUBMISSION_DATA = 'submission_data',
  DATA_MODEL = 'data_model',
}

@Description('An Entity is a data structure within the engine to represent a user-defined model.')
export class Entity {
  @Optional()
  @Default(EntityType.SUBMISSION_DATA)
  @Description('What type of entity is this? Used to group related entities')
  type?: EntityType = EntityType.SUBMISSION_DATA

  @Required()
  @Example('moduleId')
  @Description('Entity key is a unique key to target entities')
  key: string

  @Required()
  @Example('12345')
  @Description('The module id the entity is associated with.')
  moduleId: string

  @Required()
  @Example('[{key: firstName, property: firstName }]', `[{key: firstName, property: differentPropName }]`)
  @Description('Targets are a collection of engine value references used get and set engine values')
  @CollectionOf(EntityTarget)
  targets: EntityTarget[]
}

export const createEntity = (obj?: Partial<Entity>) => {
  return deserialize({ ...obj }, { type: Entity })
}
