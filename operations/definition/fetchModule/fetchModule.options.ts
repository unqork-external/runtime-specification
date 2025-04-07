import { Default, Description, Example, Ignore, Optional, Required } from '@tsed/schema'

import { COLLISION_HANDLER } from '@unqork/runtime-types'

import { TrimmedDescription, Beta } from '../../../../decorators'
import { OperationOptions } from '../../interface'

@Beta()
export class FetchModuleOperationOptions extends OperationOptions {
  @Optional()
  @Description('ID of the module to fetch')
  moduleId?: string

  @Optional()
  @TrimmedDescription(`
    URL to load the module spec from.

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
    HTTP Method to use when loading module via moduleUrl
  `)
  @Default('GET')
  method? = 'GET'

  @Optional()
  @TrimmedDescription(`
    Custom ID to store module as in state

    Most commonly used when fetching a module via moduleUrl to enable rendering later
  `)
  storeModuleAs?: string

  @Optional()
  @Description('How should module ID collisions be handled')
  collisionHandler?: COLLISION_HANDLER

  // This can be removed once BaseOperationOperations is refactored.
  // https://unqork-jira.atlassian.net/browse/UN-27976
  // we can ignore properties with type never - Remove this decorator if this type is changed
  @Ignore()
  targetKey?: never
}
