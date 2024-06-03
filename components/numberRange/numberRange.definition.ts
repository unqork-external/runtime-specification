import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { NumberRangeOptions } from './numberRange.options'
import { NumberRangeStyling } from './numberRange.styling'
import { NumberRangeTargets } from './numberRangeTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { NumberFieldSettings, NumberFormat } from '../../component-composition/number'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('numberRange')
@TrimmedDescription(`
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
`)
@ViewTargets(NumberRangeTargets)
export class NumberRangeComponentDefinition extends BaseComponentDefinition {
  @Const('numberRange')
  type: 'numberRange' = 'numberRange' as const

  @Property()
  display: Display = new Display()

  @Property()
  field: NumberFieldSettings = new NumberFieldSettings()

  @Property()
  format: NumberFormat = new NumberFormat()

  @TrimmedDescription(`
    The initial value for the component configured in the designer.
    It is the value that determines the slider's start position.
  `)
  defaultValue?: number

  @Property()
  options: NumberRangeOptions = new NumberRangeOptions()

  @Description('Value of the Number Range component. It will be within the range if not set.')
  declare value?: number

  @Examples(targetedStylingExample)
  declare styling: NumberRangeStyling

  @Property()
  declare signals: SignalTargets<NumberRangeTargets>
}
