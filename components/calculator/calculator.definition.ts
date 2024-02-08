import { DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition'

@DiscriminatorValue('calculator')
export class CalculatorComponentDefinition extends BaseComponentDefinition {
  @Property()
  type: string = 'calculator'

  @Property(Field)
  field: Field = new Field()
}
