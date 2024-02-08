import { CollectionOf, Const, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { FieldGroupStyling } from './fieldGroup.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('fieldGroup')
@Description(
  trimAll(`
    The Field Group component is part of the core range of Centauri display/layout components.
    The Field Group component lets you organize fields and components together in one group.
    You can apply a CSS style to a Field Group component to call the group out to your end-user.
    Use the Field Group component if you want a stylized group of fields as part of a larger page.
  `),
)
export class FieldGroupComponentDefinition extends BaseComponentDefinition {
  @Const('fieldGroup')
  @Description('Type of component.')
  type: string = 'fieldGroup' as const

  @Property()
  @Description(`List of IDs that reference a fieldGroup's children.`)
  childIds: string[] = []

  @Property()
  @CollectionOf(BaseComponentDefinition)
  @Description(`Definitions of children components to be rendered within the Field Group.`)
  declare components: BaseComponentDefinition[]

  @Property(Display)
  display: Display = new Display()

  @Property()
  @Description('Nestable information for fieldGroup. fieldGroup contains a standard array of unique components.')
  nestables = { childIds: new StandardArrayNestable() }

  @Property()
  @Description('Object that maps customized CSS styling to specific targets on the Field Group.')
  @Example(targetedStylingExample)
  declare styling: FieldGroupStyling
}
