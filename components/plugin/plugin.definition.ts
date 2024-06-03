import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { pluginValueExample } from './plugin.value.example'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('plugin')
@TrimmedDescription(`
  The "Plugin Component" is a direct descendant of Centauri's Plugin logic component.
  All of the logic that once existed as a part of the component has been abstracted into the API_CALL operation.
  This component exists so that it can hold response data and be referenced in a converted Centauri -> Vega application as expected. 
`)
export class PluginComponentDefinition extends BaseComponentDefinition {
  @Const('plugin')
  type: 'plugin' = 'plugin' as const

  @Description(
    `Whenever a plugin's API_CALL operation is executed, the response should be stored under this key. It could be any data type.`,
  )
  @Examples(pluginValueExample)
  value?: unknown

  @Property()
  declare signals: SignalTargets<'root'>
}
