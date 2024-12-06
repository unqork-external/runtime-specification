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

import { UdViewStyling } from './udView.styling'
import { UdViewBasicField } from './UdViewBasicField'
import { UdViewAppearance } from './UdViewEnums'
import { UdViewTargets } from './udViewTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('udView')
@ViewTargets(UdViewTargets)
export class UdViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udView' = 'udView' as const

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the view.')
  appearance?: UdViewAppearance

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  declare signals?: SignalTargets<UdViewTargets>

  @Optional()
  @Description('Map of customized CSS styling for specific targets.')
  @Property(UdViewStyling)
  declare styling?: UdViewStyling

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }
}

export class UdViewComponentState extends UdViewComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
