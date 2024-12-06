import { CollectionOf, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { UdButtonViewTargets } from './udButtonViewTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import { type SignalTargets } from '../../signals'
import { UdViewBasicField } from '../udView'

@DiscriminatorValue('udButtonView')
@ViewTargets(UdButtonViewTargets)
export class UdButtonViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udButtonView' = 'udButtonView' as const

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  declare signals?: SignalTargets<UdButtonViewTargets>

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }
}

export class UdButtonViewComponentState extends UdButtonViewComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
