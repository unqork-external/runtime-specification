import { Const, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { pluginValueExample } from '../../examples/plugin/plugin.value.example'

@DiscriminatorValue('plugin')
@Description(
  trimAll(`
      The "Plugin Component" is a direct descendant of Centauri's Plugin logic component.
      All of the logic that once existed as a part of the component has been abstracted into the API_CALL operation.
      This component exists so that it can hold response data and be referenced in a converted Centauri -> Vega application as expected. 
  `),
)
export class PluginComponentDefinition extends BaseComponentDefinition {
  @Const('plugin')
  @Description('Type of component.')
  type: 'plugin' = 'plugin' as const

  @Property()
  @Description(
    `Whenever a plugin's API_CALL operation is executed, the response should be stored under this key. It could be any data type.`,
  )
  @Example(pluginValueExample)
  value?: unknown
}
