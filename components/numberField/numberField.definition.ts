import { Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { NumberFieldStyling } from './numberField.styling'
import { NumberFieldTargets } from './numberFieldTargets.enum'
import { NumberSimpleViewModel } from './numberSimpleViewModel'
import { NumberValidation } from './NumberValidation'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import {
  InputDisplay,
  NumberFieldSettings,
  NumberFormat,
  NumberOptions,
  StandardAdornmentsAsNestables,
  StandardAdornmentsProperties,
} from '../../component-composition'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { TextareaValidation } from '../textarea/textareaValidation'

@DiscriminatorValue('numberField')
@TrimmedDescription(`
  The Number Field component is part of the core set of input components.
  It displays the field as a simple text box. The end-user enters the value directly into the field.
  It is one of the three types of Number components.
  Non-numeric (and dot) characters will be stripped from the field at keystroke or paste.
`)
@ViewTargets(NumberFieldTargets)
export class NumberFieldComponentDefinition extends BaseComponentDefinition {
  @Const('numberField')
  type: string = 'numberField' as const

  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView?: boolean = false

  @Property()
  simpleView?: NumberSimpleViewModel

  @Property()
  display: InputDisplay = new InputDisplay()

  @Property()
  field: NumberFieldSettings = new NumberFieldSettings()

  @Property()
  format: NumberFormat = new NumberFormat()

  @TrimmedDescription(`
    The initial value for the component configured in the designer.
    - It is the value that will initially appear inside the text box;
  `)
  defaultValue?: number

  @Description('Options to configure the numberField component.')
  options: NumberOptions = new NumberOptions()

  @Description('Value of the numberField component. It will be undefined if not set.')
  declare value?: number

  @Description('Optional icons that can be added to the left or right side of the input field.')
  adornments?: StandardAdornmentsProperties = new StandardAdornmentsProperties()

  @TrimmedDescription(`
    Fully qualified child keys for adornments in the left slot.
    Maintained by nestable api.
  `)
  left?: string[] = []

  @TrimmedDescription(`
    Fully qualified child keys for adornments in the right slot.
    Maintained by nestable api.
  `)
  right?: string[] = []

  @TrimmedDescription(`
    Nestable definitions for adorned numberField component.
    Simple Views
  `)
  nestables?: StandardAdornmentsAsNestables = new StandardAdornmentsAsNestables()

  @Examples(targetedStylingExample)
  declare styling: NumberFieldStyling

  @Property()
  declare signals: SignalTargets<NumberFieldTargets>

  @Property()
  validation: NumberValidation = new NumberValidation()
}
