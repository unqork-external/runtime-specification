import { CollectionOf, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { PanelStyling } from './panel.styling'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('panel')
export class PanelComponentDefinition extends BaseComponentDefinition {
  @Property()
  accordion: boolean
  @Property()
  theme: string
  @Property()
  customClass: string
  @Property(Display)
  display: Display = new Display()
  @Property(Field)
  field: Field = new Field()
  @Property()
  modalIsOpen: boolean = false

  // optional
  @Property()
  accordionCollapsed?: boolean

  // optional modal configs
  @Property()
  modal?: boolean
  @Property()
  outsideDismiss?: boolean
  @Property()
  triggerOnDismissal?: string
  @Property()
  modalOpenEvent?: string
  @Property()
  modalDismissEvent?: string
  @Property()
  windowClass?: string //TODO: should consider renaming this

  // Isolation validation of panel components from rest of module
  @Property()
  isolateValidation?: boolean

  @Description('Nestable information for panel')
  nestables = { childIds: new StandardArrayNestable() }

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Styling model for a Panel Component')
  styling: PanelStyling
}
