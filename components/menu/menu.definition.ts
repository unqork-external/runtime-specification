import { CollectionOf, Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { ItemsNestable } from './itemNestable'
import { MenuStyling } from './menu.styling'
import { MenuTargets } from './menu.targets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('menu')
@ViewTargets(MenuTargets)
export class MenuComponentDefinition extends BaseComponentDefinition {
  @Const('menu')
  type: 'menu' = 'menu' as const

  @Property()
  display: Display = new Display()

  @CollectionOf(BaseComponentDefinition)
  @Description('Nested component definition.')
  items?: BaseComponentDefinition[] = []

  @Default(false)
  @TrimmedDescription(`If \`open\` is true, the menu should be in its open state.`)
  open: boolean = false

  @TrimmedDescription(`\`anchorKey\` refers to where the Menu should appear on the screen.`)
  anchorKey: string

  @Description(`a flag to determine whether the close the menu on option click or to let the configurator handle that`)
  shouldCloseOnClick?: boolean = true

  @Description('Fully qualified child keys for items nestables. Maintained by nestable api.')
  itemKeys?: string[] = []

  @Description('Nestable definitions for menu component')
  nestables = {
    itemKeys: new ItemsNestable(),
  }

  @Property()
  declare signals: SignalTargets<MenuTargets>

  @Examples(targetedStylingExample)
  declare styling: MenuStyling

  @Description('Any custom CSS classes to apply to the component, provided by the configurators')
  customClass?: string
}
