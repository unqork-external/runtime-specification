import { Const, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { NumberStepperOptions } from './numberStepper.options'
import { NumberStepperStyling } from './numberStepper.styling'
import { NumberStepperTargets } from './numberStepperTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display, NumberFieldSettings, NumberFormat } from '../../component-composition'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('numberStepper')
@TrimmedDescription(`
  The Number Stepper component is part of the core set of input components.
  It displays the field as a value with a plus (+) and minus (-) button on either side.
  It is one of the three types of Number components.
  Similar to the Number Range, the possible values of the Number Stepper
  component are dictated by the step size. The end-user clicks the plus or minus 
  to select their value.
`)
@ViewTargets(NumberStepperTargets)
export class NumberStepperComponentDefinition extends BaseComponentDefinition {
  @Required()
  @Const('numberStepper')
  type: 'numberStepper' = 'numberStepper' as const

  @Property()
  display: Display = new Display()

  @Property()
  field: NumberFieldSettings = new NumberFieldSettings()

  @Property()
  format: NumberFormat = new NumberFormat()

  @Optional()
  @Description('The default value for the Number Stepper.')
  defaultValue?: number

  @Property()
  options: NumberStepperOptions = new NumberStepperOptions()

  @Description('Value of the Number Stepper component. It will be undefined if not set.')
  declare value?: number

  @Examples(targetedStylingExample)
  declare styling?: NumberStepperStyling

  @Property()
  declare signals: SignalTargets<NumberStepperTargets>
}
