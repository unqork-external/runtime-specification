import { Description, Required } from '@tsed/schema'

export class RenderModuleOperationOptions {
  @Required()
  @Description('Id corresponding to loaded module that should be rendered.')
  moduleId: string

  @Required()
  @Description('Target Key identifying component in which the module should be rendered.')
  targetKey: string

  @Required()
  @Description('Name of the nestable in which the module should be rendered.')
  targetNestable: string
}
