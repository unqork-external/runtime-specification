import { Default, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { NumberOptions } from '../../component-composition/number/number.options'

@TrimmedDescription(`
  Options to customize the Number Stepper component. Options include:
  - hideMinMaxLabels: Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
  - stepSize: Describes the size of the "step" to increment/decrement the component value. If no input, defaults to 2.
`)
export class NumberStepperOptions extends NumberOptions {
  @Required()
  @Default(false)
  @TrimmedDescription(`
    Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
    If a label is not set, this flag has no effect.
  `)
  hideMinMaxLabels: boolean = false

  @Required()
  @Default(2)
  @TrimmedDescription(`
    Describes the size of the "step" to increment/decrement the component value. If no input, defaults to two.
    Note using decimal step sizes with high precision (e.g.: 2.000005) can create rounding issues.
  `)
  stepSize: number = 2
}
