import { Const, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { NumberRangeStyling } from './styling/numberRange.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'
import { NumberField } from '../number/numberField'
import { NumberFormat } from '../number/numberFormat'
import { NumberOptions } from '../number/numberOptions'

@DiscriminatorValue('numberRange')
@Description(
  trimAll(`
        The Number Range component is part of the core set of input components.
        It displays a horizontal slider that can be dragged left or right by the 
        user to set the value.
        It is one of the three types of Number components.
        Similar to the Number Stepper, the possible values of the Number Range
        component are dictated by the step size. Dragging the slider left will
        decrease the value by increments of the configured step size, while 
        dragging it right will increase the value by increments of the step size.
        A minimum and maximum can be configured in validations to set the lower
        and upper bounds of the slider.
    `),
)
export class NumberRangeComponentDefinition extends BaseComponentDefinition {
  @Const('numberRange')
  @Description('Describes the component type')
  type: 'numberRange' = 'numberRange' as const

  @Property(Display)
  @Description('Display settings for the Number Range component.')
  display: Display = new Display()

  @Property(NumberField)
  @Description('Field settings for the Number Range component.')
  field: NumberField = new NumberField()

  @Property(NumberFormat)
  @Description('Formatting settings for the number component.')
  format: NumberFormat = new NumberFormat()

  @Description(
    trimAll(`The initial value for the component configured in the designer.
     It is the value that determines the slider's start position.`),
  )
  defaultValue?: number

  @Description(
    trimAll(`
    Options to customize the Number Range component. Options include:
    hideMinMaxLabels: Hides the min/max labels. It needs to be used with (maxNumber) and/or (minNumber) properties.
    hideComponentValueLabel: Determines if the selected value should be displayed.
    maxNumber: Max value (inclusive) the component will allow. Used as the max boundary of the slider.
    minNumber: Min value (inclusive) the component will allow. Used as the min boundary of the slider.
    stepSize: Describes the size of the "step" to increment/decrement the component value. If no input, defaults to 2.
    customClass: Adds a custom CSS class to the component.
    `),
  )
  options: NumberOptions = new NumberOptions()

  @Description('Value of the Number Range component. It will be within the range if not set.')
  declare value?: number

  @Property()
  @Description('Object that maps customized CSS styling to specific targets on the Number Range component.')
  @Example(targetedStylingExample)
  declare styling: NumberRangeStyling
}
