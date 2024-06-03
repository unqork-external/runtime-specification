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

import { UdLinkViewTargets } from './udLinkViewTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { UdLinkToDefinition, UdLinkToModuleDefinition } from '../udLink/udLink.definition'
import { UdViewBasicField, UdViewDirection } from '../udView'

@DiscriminatorValue('udLinkView')
@ViewTargets(UdLinkViewTargets)
export class UdLinkViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udLinkView' = 'udLinkView' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  @Enum(UdViewDirection)
  @Default(UdViewDirection.VERTICAL)
  @Description('Direction represents how the view children should be disposed.')
  direction?: UdViewDirection

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Required()
  @Description('Style represent the intended display style for the link.')
  to: UdLinkToDefinition | UdLinkToModuleDefinition

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child IDs for nestable references')
  childIds: string[] = []

  @Optional()
  declare signals?: SignalTargets<UdLinkViewTargets>
}
