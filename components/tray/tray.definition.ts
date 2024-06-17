import { CollectionOf, Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { TrayStyling } from './styling/tray.styling'
import { TrayGroupDefinition } from './trayGroup.definition'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('tray')
export class TrayComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'tray' = 'tray' as const

  @Property()
  @Description('Styling target for the tray.')
  styling: TrayStyling

  @Required()
  @Property()
  @CollectionOf(TrayGroupDefinition)
  @Description('Used to display groups of BaseTrayItemDefinitions on the tray.')
  groups: TrayGroupDefinition[] = []

  @Required()
  @Property()
  @Default(false)
  @Description('Boolean to determine if the tray should be pulled from the assets.')
  useSpecFromAssets: boolean = false

  @Required()
  @Property()
  @Default(false)
  @Description('')
  @Description('Boolean to determine if default searchbar should be used.')
  useDefaultSearchBar: boolean = false

  @Required()
  @Property()
  @Default(false)
  @Description('Boolean to determine if default styles should be used.')
  useDefaultStyles: boolean = false

  @Required()
  @Property()
  @Default(false)
  @Description('Boolean to determine if default styles should be used.')
  useLegacy: boolean = false

  @Required()
  @Property()
  @Default('')
  @Description('Text which the tray filters based on label, type, and searchCriteria of a BaseTrayItemDefinition.')
  filterText: string = ''

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information for tray')
  nestables = { childIds: new StandardArrayNestable() }
}
