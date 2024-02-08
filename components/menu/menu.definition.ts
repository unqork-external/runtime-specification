import { CollectionOf, Default, Description, DiscriminatorValue, Example, Property, Required } from '@tsed/schema'

import { ItemsNestable } from './itemNestable'
import { MenuStyling } from './styling/menu.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'

@DiscriminatorValue('menu')
export class MenuComponentDefinition extends BaseComponentDefinition {
  @Required()
  @Description('Component type.')
  type: 'menu' = 'menu' as const

  @Property(Display)
  display: Display = new Display()

  @CollectionOf(BaseComponentDefinition)
  @Description('Nested component definition.')
  items?: BaseComponentDefinition[] = []

  @Default(false)
  @Description(trimAll(`If \`open\` is true, the menu should be in its open state.`))
  open: boolean = false

  @Description(trimAll(`\`anchorKey\` refers to where the Menu should appear on the screen.`))
  anchorKey: string

  @Description(
    trimAll(`
      Temporary anchor key to override where a menu should open.
      Used to position relative to a specific element as part of an operation
    `),
  )
  temporaryAnchorKey: string

  @Description('Fully qualified child keys for items nestables. Maintained by nestable api.')
  itemKeys?: string[] = []

  @Description('Nestable definitions for menu component')
  nestables = {
    itemKeys: new ItemsNestable(),
  }

  @Property()
  @Description('Object that maps customized CSS styling to specific targets on the Menu.')
  @Example(targetedStylingExample)
  declare styling: MenuStyling
}
