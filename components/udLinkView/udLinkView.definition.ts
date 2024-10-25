import { CollectionOf, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { UdLinkViewTargets } from './udLinkViewTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { UdLinkToDefinition, UdLinkToModuleDefinition } from '../udLink/udLink.definition'
import { UdViewBasicField } from '../udView'

@DiscriminatorValue('udLinkView')
@ViewTargets(UdLinkViewTargets)
export class UdLinkViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udLinkView' = 'udLinkView' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Required()
  @Description('Style represent the intended display style for the link.')
  to: UdLinkToDefinition | UdLinkToModuleDefinition

  @Optional()
  declare signals?: SignalTargets<UdLinkViewTargets>

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }
}

export class UdLinkViewComponentState extends UdLinkViewComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
