import { CollectionOf, Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display, Field } from '../../component-composition'
import { RightAdornmentNestable } from '../../component-composition/adornments/component.adornments'
import { Nestable, NestableType } from '../../nestables'

class MuiMenuItemAdornments {
  @CollectionOf(BaseComponentDefinition)
  icon: BaseComponentDefinition[]

  @CollectionOf(BaseComponentDefinition)
  right: BaseComponentDefinition[]
}

class IconAdornmentNestable extends Nestable {
  @Default('icon')
  propertyName: string = 'icon'

  @Default(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY

  @Default('adornments.icon')
  children: string = 'adornments.icon'
}

@DiscriminatorValue('muiMenuItem')
export class MuiMenuItemComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiMenuItem' = 'muiMenuItem' as const

  @Property(MuiMenuItemAdornments)
  adornments = new MuiMenuItemAdornments()

  @Property(Display)
  display: Display = new Display()

  @Property(Field)
  field: Field = new Field()

  @Description('Fully qualified child keys for icon nestables. Maintained by nestable api.')
  icon: string[] = []

  @TrimmedDescription(`
    Fully qualified child keys for adornments in the right slot.
    Maintained by nestable api.
  `)
  right?: string[] = []

  @Description('Nestable definitions for mui menu item component')
  nestables = {
    icon: new IconAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }
}
