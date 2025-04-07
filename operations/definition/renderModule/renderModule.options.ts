import { Description, Optional, Required } from '@tsed/schema'

import type { BaseComponentDefinition, ModuleDefinition } from '@unqork/runtime-types'

import { TrimmedDescription, Beta } from '../../../../decorators'
import { OperationOptions } from '../../interface'

@Beta()
export class RenderModuleOperationOptions extends OperationOptions {
  @Optional()
  @Description('ID corresponding to an already fetched module that should be rendered.')
  moduleId?: string

  @Optional()
  @TrimmedDescription(`
    A full module definition or array of components to render at the target slot
  `)
  moduleSpec?: ModuleDefinition | Array<BaseComponentDefinition>

  @Required()
  @Description('Target Key identifying component in which the module should be rendered.')
  targetKey: string

  @Required()
  @Description('Name of the nestable in which the module should be rendered.')
  targetNestable: string
}
