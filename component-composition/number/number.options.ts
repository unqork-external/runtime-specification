import { Description } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

export class NumberOptions {
  @TrimmedDescription(`
    Max value (inclusive) the component will allow.
    For (Range) and (Stepper) types, there is no way to get past this value, it will be used as 
    the max boundary of the slider and the top limit when scrolling using the stepper buttons.
    If adding (stepSize) makes the current value exceed (maxNumber) - for instance, current value is 5, 
    step size is 2 and max number is 6 - (maxNumber) will never be reached.
    For (Field) types, values greater than (maxNumber) still can be typed, but a validation error will be triggered.
  `)
  maxNumber?: number

  @TrimmedDescription(`
    Min value (inclusive) the component will allow.
    For (Range) and (Stepper) types, there is no way to get below this value, it will be used as 
    the min boundary of the slider and the bottom limit when scrolling using the stepper buttons.
    If subtracting (stepSize) makes the current value be less than (minNumber) - for instance, current value is 5, 
    step size is 2 and min number is 4 - (minNumber) will never be reached.
    For (Field) types, values lower than (minNumber) still can be typed, but a validation error will be triggered.
  `)
  minNumber?: number
}
