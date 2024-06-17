import { Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseSettingDefinition } from '../../../designer-specification'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('configurationEditor')
export class ConfigurationEditorComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'configurationEditor' = 'configurationEditor' as const

  @Required()
  @Default({})
  @Description('The draft state of the config that is currently being used by the config editor.')
  currentConfig: Record<string, any> = {}

  @Required()
  @Default({})
  @Description('The slice of state designated holding an asset type paired with its BaseSettingDefinition.')
  assetsSettingsSpecs: Record<string, BaseSettingDefinition> = {}

  @Required()
  @Default(false)
  @Description('Boolean to determine if the config areas should be pulled from the assets.')
  useSpecFromAssets: boolean = false

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Required()
  @Property()
  @Default(false)
  @Description('Boolean to determine if default styles should be used.')
  useLegacy: boolean = false

  @Description('Nestable information for configuration editor')
  nestables = { childIds: new StandardArrayNestable() }
}
