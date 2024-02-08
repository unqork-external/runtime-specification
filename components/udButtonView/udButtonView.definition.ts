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

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import { UdViewBasicField, UdViewDirection, UdViewDraggable } from '../udView'

@DiscriminatorValue('udButtonView')
export class UdButtonViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udButtonView' = 'udButtonView' as const

  @Optional()
  @Enum(UdViewDirection)
  @Default(UdViewDirection.VERTICAL)
  @Description(
    trimAll(`
    Direction represents how the view children should be disposed.
  `),
  )
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
}
