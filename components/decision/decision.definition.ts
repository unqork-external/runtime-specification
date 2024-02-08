import { DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition'

@DiscriminatorValue('decision')
export class DecisionComponentDefinition extends BaseComponentDefinition {
  @Property(Field)
  field: Field = new Field()

  @Property()
  triggerType: string

  @Property()
  type: string = 'decision'
}
