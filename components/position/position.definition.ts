import { CollectionOf, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { PositionDisplay } from './positionDisplay'
import { PositionOptions } from './positionOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('position')
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
}
