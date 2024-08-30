import { Description, Ignore, Optional, Required } from '@tsed/schema'

import { COLLISION_HANDLER } from '@unqork/runtime-types'

export class FetchModuleOperationOptions {
  @Required()
  @Description('Id that identifies module to fetch')
  moduleId: string

  @Optional()
  @Description('How should module ID collisions be handled')
  collisionHandler?: COLLISION_HANDLER

  // This can be removed once BaseOperationOperations is refactored.
  // https://unqork-jira.atlassian.net/browse/UN-27976
  // we can ignore properties with type never - Remove this decorator if this type is changed
  @Ignore()
  targetKey?: never
}
