import {
  CollectionOf,
  Default,
  Description,
  DiscriminatorValue,
  Enum,
  Optional,
  Property,
  Required,
} from '@tsed/schema'

import { UdToggleViewStyling } from './udToggleView.styling'
import { UdToggleViewField } from './UdToggleViewField'
import { UdToggleViewTargets } from './udToggleViewTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { UdTextAppearance } from '../udText'
import { UdViewAppearance } from '../udView'

@DiscriminatorValue('udToggleView')
@ViewTargets(UdToggleViewTargets)
export class UdToggleViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udToggleView' = 'udToggleView' as const

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the toggle header.')
  headerAppearance?: UdTextAppearance

  @Optional()
  @Description('Accessible label that describes the header for screen readers.')
  headerAriaLabel?: string

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the toggle content.')
  contentAppearance?: UdViewAppearance

  @Optional()
  @Description('Accessible ARIA role for assistive technology tools for the content.')
  contentAriaRole?: string

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdToggleViewField)
  @Description('Field settings')
  // eslint-disable-next-line semi
  field: UdToggleViewField = new UdToggleViewField()

  @Description('Indicates the toggle is initially open')
  @Default(false)
  // TODO: "open" should be a generic state for components, not only modals
  modalIsOpen?: boolean

  @Optional()
  declare signals?: SignalTargets<UdToggleViewTargets>

  @Optional()
  @Description('Map of customized CSS styling for specific targets.')
  @Property(UdToggleViewStyling)
  styling?: UdToggleViewStyling

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }
}

export class UdToggleViewComponentState extends UdToggleViewComponentDefinition {
  @Description('Child IDs for nestable references')
  childIds: string[] = []
}
