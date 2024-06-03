import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Field } from '../../component-composition'

@DiscriminatorValue('calculator')
@TrimmedDescription(`
  The Calculator component is a tool that performs calculations with other
  components. It can add numbers, join values, handle complex math,
  calculate durations, and transfer data between components.
`)
export class CalculatorComponentDefinition extends BaseComponentDefinition {
  @Const('calculator')
  @Description('Type of component.')
  type: 'calculator' = 'calculator' as const

  @Property(Field)
  field: Field = new Field()
}
