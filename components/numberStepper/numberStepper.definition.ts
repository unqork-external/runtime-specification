import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display } from '../../componentComposition'
import { NumberField } from '../number/numberField'
import { NumberFormat } from '../number/numberFormat'
import { NumberOptions } from '../number/numberOptions'

@DiscriminatorValue('numberStepper')
@Description('Displays the number as inline text along with +/- buttons.')
export class NumberStepperComponentDefinition extends BaseComponentDefinition {
  @Const('numberStepper')
  @Description('Describes the component type')
  type: 'numberStepper' = 'numberStepper' as const

  @Property(Display)
  @Description('Display settings for the numberStepper component.')
  display: Display = new Display()

  @Property(NumberField)
  @Description('Field settings for the numberStepper component.')
  field: NumberField = new NumberField()

  @Property(NumberFormat)
  @Description('Formatting settings for the numberStepper component.')
  format: NumberFormat = new NumberFormat()

  @Description(
    trimAll(`
    The initial value for the component configured in the designer.
    It is the value that determines the stepper start position.
      `),
  )
  defaultValue?: number

  @Description(
    trimAll(`
        Options to configure the different interaction types of the number stepper component.
      `),
  )
  options: NumberOptions = new NumberOptions()

  @Description('Value of the numberStepper component. It will be undefined if not set.')
  declare value?: number
}
