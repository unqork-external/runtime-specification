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

import { UdButtonViewTargets } from './udButtonViewTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import { type SignalTargets } from '../../signals'
import { UdViewBasicField, UdViewDirection, UdViewDraggable } from '../udView'

@DiscriminatorValue('udButtonView')
@ViewTargets(UdButtonViewTargets)
export class UdButtonViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udButtonView' = 'udButtonView' as const

  @Optional()
  @Enum(UdViewDirection)
  @Default(UdViewDirection.VERTICAL)
  @Description('Direction represents how the view children should be disposed.')
  direction?: UdViewDirection

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewDraggable)
  @Description('Draggable properties')
  draggable?: UdViewDraggable

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child IDs for nestable references')
  childIds: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  signals?: SignalTargets<UdButtonViewTargets>
}
