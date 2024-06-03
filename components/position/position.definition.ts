import { CollectionOf, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { PositionDisplay } from './positionDisplay'
import { PositionOptions } from './positionOptions'
import { PositionTargets } from './positionTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('position')
@ViewTargets(PositionTargets)
export class PositionComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'position' = 'position' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(PositionDisplay)
  display: PositionDisplay = new PositionDisplay()

  @Property(PositionOptions)
  options: PositionOptions = new PositionOptions()

  @Description('Fully qualified child keys for items nestables. Maintained by nestable api.')
  childIds: string[] = []

  @Description('Nestable definitions for position component')
  nestables = { childIds: new StandardArrayNestable() }

  @Optional()
  declare signals?: SignalTargets<PositionTargets>
}
