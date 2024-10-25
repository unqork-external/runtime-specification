import { CollectionOf, Const, Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { FieldGroupSettings } from './fieldGroup.field'
import { FieldGroupStyling } from './styling/fieldGroup.styling'
import { FieldGroupTargets } from './targets/fieldGroupTargets.enum'
import { Examples, ViewTargets } from '../../../decorators'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('fieldGroup')
@TrimmedDescription(`
  The Field Group component is part of the core range of Centauri display/layout components.
  The Field Group component lets you organize fields and components together in one group.
  You can apply a CSS style to a Field Group component to call the group out to your end-user.
  Use the Field Group component if you want a stylized group of fields as part of a larger page.
  The Field Group component is similar to the Panel component, but you would not use a 
  Field Group component for navigation, like you would with a Panel.
`)
@ViewTargets(FieldGroupTargets)
export class FieldGroupComponentDefinition extends BaseComponentDefinition {
  @Const('fieldGroup')
  type: string = 'fieldGroup' as const

  @Required()
  @CollectionOf(BaseComponentDefinition)
  @Description(`Definitions of children components to be rendered within the Field Group.`)
  @Default([])
  declare components: BaseComponentDefinition[]

  @Property()
  declare signals: SignalTargets<FieldGroupTargets>

  @Property()
  display: Display = new Display()

  @Property()
  field: FieldGroupSettings = new FieldGroupSettings()

  @Examples(targetedStylingExample)
  declare styling?: FieldGroupStyling

  @Description('Nestable information for Field Group. Field Group contains a standard array of unique components.')
  nestables = { childIds: new StandardArrayNestable() }
}

export class FieldGroupComponentState extends FieldGroupComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
