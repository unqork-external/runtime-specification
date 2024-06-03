import {
  Optional,
  CollectionOf,
  Default,
  Description,
  DiscriminatorValue,
  Enum,
  Property,
  Required,
} from '@tsed/schema'

import { UdToggleViewTargets } from './udToggleViewTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { UdTextAppearance } from '../udText'
import { UdViewAppearance, UdViewBasicField, UdViewDirection } from '../udView'

@DiscriminatorValue('udToggleView')
@ViewTargets(UdToggleViewTargets)
export class UdToggleViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udToggleView' = 'udToggleView' as const

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the toggle header.')
  headerAppearance?: UdTextAppearance

  @Enum(UdViewDirection)
  @Default(UdViewDirection.DEFAULT)
  @Description('Direction represents how the header children should be disposed.')
  headerDirection?: UdViewDirection

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the toggle content.')
  contentAppearance?: UdViewAppearance

  @Enum(UdViewDirection)
  @Default(UdViewDirection.DEFAULT)
  @Description('Direction represents how the content children should be disposed.')
  contentDirection?: UdViewDirection

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  // eslint-disable-next-line semi
  field: UdViewBasicField = new UdViewBasicField()

  @Description('Indicates the toggle is initially open')
  @Default(false)
  // TODO: "open" should be a generic state for components, not only modals
  modalIsOpen?: boolean

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child IDs for nestable references')
  childIds: string[] = []

  @Optional()
  declare signals?: SignalTargets<UdToggleViewTargets>
}
