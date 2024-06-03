import { CollectionOf, Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Nestable, NestableType } from '../../nestables'

class ItemsNestable extends Nestable {
  @Default('itemKeys')
  propertyName: string = 'itemKeys'

  @Default(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY

  @Default('items')
  children: string = 'items'
}

@DiscriminatorValue('muiMenu')
export class MuiMenuComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiMenu' = 'muiMenu' as const

  @Required()
  @CollectionOf(BaseComponentDefinition)
  items: BaseComponentDefinition[] | undefined

  @Optional()
  @TrimmedDescription(`If \`open\` is true, the menu should be in its open state.`)
  open: boolean

  @Optional()
  @TrimmedDescription(`\`anchorKey\` refers to where the Menu should appear on the screen.`)
  anchorKey: string

  @Property(Display)
  display: Display = new Display()

  @Description('Fully qualified child keys for items nestables. Maintained by nestable api.')
  itemKeys?: string[] = []

  @Description('Nestable definitions for mui menu component')
  nestables = {
    itemKeys: new ItemsNestable(),
  }
}
