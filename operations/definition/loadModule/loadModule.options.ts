import { Description, Required } from '@tsed/schema'

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
}
