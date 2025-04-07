import { Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { ByocStyling } from './byoc.styling'
import { ByocTargets } from './byocTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('byoc')
@ViewTargets(ByocTargets)
export class ByocComponentDefinition extends BaseComponentDefinition {
  @Const('byoc')
  type: 'byoc' = 'byoc' as const

  @Optional()
  declare styling?: ByocStyling

  @Required()
  @Description('Name of the custom component')
  declare name: string

  @Required()
  @Default('URL pointing to the custom component code.')
  declare url: string

  @Required()
  @Default({})
  @Description(`Assigns a property to either a specified Unqork component's value or a static value. 
  When the user updates the Unqork component, the corresponding module component's value is automatically updated.`)
  dataBindings: Record<string, unknown> = {}

  @Required()
  @Default({})
  @Description(`Assigns a key from within the user's component to a specified module component key. 
  When the user updates the key within the custom component, the module component's value will also be updated.`)
  outputs: Record<string, unknown> = {}

  @Required()
  @Default(true)
  @Description(`Toggles visibility of error message.`)
  showError: boolean = true

  @Optional()
  declare signals?: SignalTargets<ByocTargets>
}
