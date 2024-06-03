import { Default, Description } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { NumberOptions } from '../../component-composition'

@TrimmedDescription(`
  Options to customize the Number Range component. Options include:
  hideMinMaxLabels: Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
  hideComponentValueLabel: Determines if the selected value should be displayed.
  maxNumber: Max value (inclusive) the component will allow. Used as the max boundary of the slider.
  minNumber: Min value (inclusive) the component will allow. Used as the min boundary of the slider.
  stepSize: Describes the size of the "step" to increment/decrement the component value. If no input, defaults to 2.
`)
export class NumberRangeOptions extends NumberOptions {
  @Default(false)
  @TrimmedDescription(`
    Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
    If a label is not set, this flag has no effect.
  `)
  hideMinMaxLabels: boolean = false

  @Default(false)
  @Description('Determines if the selected value should be displayed.')
  hideComponentValueLabel: boolean = false

  @Default(2)
  @TrimmedDescription(`
    Describes the size of the "step" to increment/decrement the component value. If no input, defaults to two.
    Note using decimal step sizes with high precision (e.g.: 2.000005) can create rounding issues.
    Available for: [Stepper, Range]
  `)
  stepSize: number = 2
}
