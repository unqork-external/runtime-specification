import { CollectionOf, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { RepeaterNestables } from './repeaterNestables'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'

@DiscriminatorValue('repeater')
export class RepeaterComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'repeater' = 'repeater' as const

  @Property()
  declare value: object[]

  @Property()
  display: Display = new Display()

  /**
   * Nestables
   */
  @Property()
  nestables = new RepeaterNestables()

  @Property()
  children: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]
}
