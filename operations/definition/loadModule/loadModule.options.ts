import { Default, Description, Example, Optional, Required } from '@tsed/schema'

import type {
  BaseComponentDefinition,
  COLLISION_HANDLER,
  ModuleDefinition,
  R1ComponentDefinition,
  R1ModuleDefinition,
} from '@unqork/runtime-types'

export class LoadModuleOperationOptions {
  @Description('ID corresponding to module that should be loaded.')
  moduleId?: string

  @Description(`
    URL to load module spec from.
    Most commonly used with server-side executes or transforms
  `)
  @Example('path/to/my/sse-module')
  moduleUrl?: string

  @Description(`
    Path to module definition

    Used with moduleUrl to extract definition from a path
  `)
  @Example('data.moduleDefinition')
  pathToModuleDefinition?: string

  @Description(`
    HTTP Method to use when loading module
  `)
  @Default('GET')
  method? = 'GET'

  @Description(`
    A full module definition or array of components to render at the target slot

    Support Vega or Centauri spec, will be converted to Vega before rendering
  `)
  moduleSpec?: ModuleDefinition | R1ModuleDefinition | Array<BaseComponentDefinition> | Array<R1ComponentDefinition>

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
