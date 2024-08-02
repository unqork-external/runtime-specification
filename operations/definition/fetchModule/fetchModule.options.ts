import { Description, Optional, Required } from '@tsed/schema'

import { COLLISION_HANDLER } from '@unqork/runtime-types'

import { OperationOptions } from '../../interface'

export class FetchModuleOperationOptions extends OperationOptions {
  @Required()
  @Description('Id that identifies module to fetch')
  moduleId: string

  @Optional()
  @Description('How should module ID collisions be handled')
  collisionHandler?: COLLISION_HANDLER
}
