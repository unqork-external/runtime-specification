import { Default, Description, Enum } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export enum InteractionTypeEnum {
  FIELD = 'field',
  STEPPER = 'stepper',
  RANGE = 'range',
}

export class NumberOptions {
  @Default('field')
  @Enum(InteractionTypeEnum)
  @Description(
    trimAll(`
      Describes what interaction type is rendered for the component.
      Current available types:
      - Field: Displays a simple text box to input numbers.
      - Range: Displays a horizontal slider instead of a text box. 
        By default, the slider starts in the middle of the range and the selected number appears left-sided above it.
      - Stepper: Displays the number as inline text along with +/- buttons to scroll through number values.
    `),
  )
  interactionType: InteractionTypeEnum = InteractionTypeEnum.FIELD

  @Default(false)
  @Description(
    trimAll(`
      Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
      If a label is not set, this flag has no effect.
      Available for: [Stepper, Range]
  `),
  )
  hideMinMaxLabels: boolean = false

  @Default(false)
  @Description(
    trimAll(`
      Determines if the selected value should be displayed.
      Available for: [Range]
    `),
  )
  hideComponentValueLabel: boolean = false

  @Description(
    trimAll(`
      Max value (inclusive) the component will allow.
      For (Range) and (Stepper) types, there is no way to get past this value, it will be used as 
      the max boundary of the slider and the top limit when scrolling using the stepper buttons.
      If adding (stepSize) makes the current value exceed (maxNumber) - for instance, current value is 5, 
      step size is 2 and max number is 6 - (maxNumber) will never be reached.
      For (Field) types, values greater than (maxNumber) still can be typed, but a validation error will be triggered.
    `),
  )
  maxNumber?: number

  @Description(
    trimAll(`
      Min value (inclusive) the component will allow.
      For (Range) and (Stepper) types, there is no way to get below this value, it will be used as 
      the min boundary of the slider and the bottom limit when scrolling using the stepper buttons.
      If subtracting (stepSize) makes the current value be less than (minNumber) - for instance, current value is 5, 
      step size is 2 and min number is 4 - (minNumber) will never be reached.
      For (Field) types, values lower than (minNumber) still can be typed, but a validation error will be triggered.
    `),
  )
  minNumber?: number

  @Default(2)
  @Description(
    trimAll(`
      Describes the size of the "step" to increment/decrement the component value. If no input, defaults to two.
      Note using decimal step sizes with high precision (e.g.: 2.000005) can create rounding issues.
      Available for: [Stepper, Range]
    `),
  )
  stepSize: number = 2

  @Description(
    trimAll(`
      Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.
    `),
  )
  customClass: string
}
