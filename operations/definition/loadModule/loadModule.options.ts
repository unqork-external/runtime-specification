import { Description, Optional, Required } from '@tsed/schema'

import { COLLISION_HANDLER } from '@unqork/runtime-types'

export class LoadModuleOperationOptions {
  @Required()
  @Description('Id corresponding to module that should be loaded.')
  moduleId: string

  @Required()
  @Description('Target Key identifying component in which the module should be rendered.')
  targetKey: string

  @Required()
  @Description('Name of the nestable in which the module should be rendered.')
  targetNestable: string

  @Optional()
  @Description('How should module ID collisions be handled')
  collisionHandler?: COLLISION_HANDLER
}
