import { Default, Description, Example, Optional, Required } from '@tsed/schema'

import type { BaseComponentDefinition, COLLISION_HANDLER, ModuleDefinition } from '@unqork/runtime-types'

import { TrimmedDescription, Beta } from '../../../../decorators'
import { OperationOptions } from '../../interface'

@Beta()
export class LoadModuleOperationOptions extends OperationOptions {
  @Optional()
  @Description('ID of the module to load')
  moduleId?: string

  @Optional()
  @TrimmedDescription(`
    URL to load the module spec from

    Most commonly used with server-side executes or transforms
  `)
  @Example('path/to/my/sse-module', 'https://myserver.com/generate-custom-module')
  moduleUrl?: string

  @Optional()
  @TrimmedDescription(`
    Path to the module definition within the URL response

    Used with moduleUrl to extract a definition from the specified path
  `)
  @Example('data.moduleDefinition', 'modules[0]')
  pathToModuleDefinition?: string

  @Optional()
  @TrimmedDescription(`
    HTTP Method to use when loading module
  `)
  @Default('GET')
  method? = 'GET'

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

  @Optional()
  @Description('How should module ID collisions be handled')
  collisionHandler?: COLLISION_HANDLER
}
