import { CollectionOf, Const, Default, Description, DiscriminatorValue, Required } from '@tsed/schema'

import type { GroupExpansionMap } from './groupExpansionMap.type'
import { TrayStyling } from './styling/tray.styling'
import { TrayGroupDefinition } from './trayGroup.definition'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('tray')
export class TrayComponentDefinition extends BaseComponentDefinition {
  @Const('tray')
  type: 'tray' = 'tray' as const

  @Description('Styling target for the tray.')
  declare styling: TrayStyling

  @Required()
  @CollectionOf(TrayGroupDefinition)
  @Description('Used to display groups of BaseTrayItemDefinitions on the tray.')
  groups: TrayGroupDefinition[] = []

  @Description('Mapping of each tray group to its expanded or collapsed state')
  @Default({})
  groupExpansionMap: GroupExpansionMap = {}

  @Required()
  @Default(false)
  @Description('Boolean to determine if the tray should be pulled from the assets.')
  useSpecFromAssets: boolean = false

  @Required()
  @Default(false)
  @Description('Boolean to determine if default searchbar should be used.')
  useDefaultSearchBar: boolean = false

  @Required()
  @Default(false)
  @Description('Boolean to determine if default styles should be used.')
  useDefaultStyles: boolean = false

  @Required()
  @Default(false)
  @Description('Boolean to determine if default styles should be used.')
  useLegacy: boolean = false

  @Required()
  @Default('')
  @Description('Text which the tray filters based on label, type, and searchCriteria of a BaseTrayItemDefinition.')
  filterText: string = ''

  @Description('Nestable information for tray')
  nestables = { childIds: new StandardArrayNestable() }
}

export class TrayComponentState extends TrayComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
