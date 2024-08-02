import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class RenderModuleOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Id corresponding to loaded module that should be rendered.')
  moduleId: string

  @Required()
  @Description('Name of the nestable in which the module should be rendered.')
  targetNestable: string
}
