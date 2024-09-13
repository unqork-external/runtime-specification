import { Required, DiscriminatorValue, Description, Property, Optional, Default, Example } from '@tsed/schema'

import { CodeEditorStyling } from './codeEditor.styling'
import { CodeEditorFormat } from './codeEditorFormat'
import { CodeEditorTargets } from './codeEditorTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('codeEditor')
@ViewTargets(CodeEditorTargets)
export class CodeEditorComponentDefinition extends BaseComponentDefinition {
  @Description('Field settings of the codeEditor')
  field: InputField = new InputField()

  @Property()
  display: Display = new Display()

  @Required()
  type: 'codeEditor' = 'codeEditor' as const

  @Description('Parsed value based on language format')
  declare value: string | object

  @Description('Formatting options')
  format: CodeEditorFormat = new CodeEditorFormat()

  @Optional()
  @Default(false)
  @Description('Value as object')
  valueIsObject: boolean = false

  @Optional()
  @Description('The value read by CodeMirror component')
  controlValue?: string

  @Optional()
  @Description('Error message when parsing a JSON object')
  errorMessage?: string

  @Example(targetedStylingExample)
  declare styling?: CodeEditorStyling
}
