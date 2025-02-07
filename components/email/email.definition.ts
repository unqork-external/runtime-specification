import { Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { EmailStyling } from './email.styling'
import { EmailTargets } from './emailTargets.enum'
import { ViewTargets } from '../../../decorators'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { InputDisplay } from '../../component-composition/display/component.display'
import { InputField, InputFormat } from '../../component-composition/input/component.input'
import type { SignalTargets } from '../../signals'
import { Validation } from '../../validations/validation'

@DiscriminatorValue('email')
@TrimmedDescription(`
  The Email component offers a text field with built-in 
  validation for correct email formatting. It provides a 
  straightforward way to collect valid email addresses. 
  However, note that this component does not verify the 
  activity status of the email address provided.
`)
@ViewTargets(EmailTargets)
export class EmailComponentDefinition extends BaseComponentDefinition {
  @Const('email')
  type: 'email' = 'email' as const

  @Property()
  display: InputDisplay = new InputDisplay()

  @Property()
  field: InputField = new InputField()

  @Description('Value of the email.')
  declare value: string

  @Property()
  format: InputFormat = new InputFormat()

  @Property()
  validation: Validation = new Validation()

  @Property()
  declare signals: SignalTargets<EmailTargets>

  @Property()
  declare styling?: EmailStyling
}
