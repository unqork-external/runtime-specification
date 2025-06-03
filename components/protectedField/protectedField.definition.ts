import { Const, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { ProtectedFieldStyling } from './protectedField.styling'
import { ProtectedFieldTargets } from './protectedField.targets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@TrimmedDescription(`
  The ProtectedField component masks the sensitive information like a Social Security or account number entered in the input.
  Use ProtectedField component if end-users don't want the information to be visibly seen.
`)
@DiscriminatorValue('protectedfield')
@ViewTargets(ProtectedFieldTargets)
export class ProtectedFieldComponentDefinition extends BaseComponentDefinition {
  @Const('protectedfield')
  type: 'protectedfield' = 'protectedfield' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: InputField = new InputField()

  @Optional()
  declare value: string

  @Optional()
  @Examples(targetedStylingExample)
  declare styling: ProtectedFieldStyling

  @Optional()
  declare signals: SignalTargets<ProtectedFieldTargets>
}
