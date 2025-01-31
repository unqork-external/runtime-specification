import { Required, DiscriminatorValue, Description, Property, Optional, Default, Example } from '@tsed/schema'

import { CodeEditorStyling } from './codeEditor.styling'
import { CodeEditorFormat } from './codeEditorFormat'
import { CodeEditorTargets } from './codeEditorTargets.enum'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
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

  @TrimmedDescription(
    `Parsed value based on language format.
     We ONLY set value to null when editor is set up to handle JSON and JSON.parse() fails.`,
  )
  declare value: string | object | null

  @Optional()
  @Description('The value read by CodeMirror component and displayed to the user')
  displayValue?: string

  @Description('Formatting options')
  format: CodeEditorFormat = new CodeEditorFormat()

  // TODO: UQE-9254 - Investigate whether this property can be removed or renamed.
  @Optional()
  @Default(false)
  @TrimmedDescription(
    `This property is used to only introduce the parsing behavior when explicitly needed (for ops builder).
     By default, even if language === 'json' in Code Editor, JSON will not be parsed. valueIsObject needs
     to be explicitly set to TRUE for the display value to be parsed and stored as a JSON object
     in value in state.`,
  )
  valueIsObject: boolean = false

  @Optional()
  @Description('Error message when parsing a JSON object')
  errorMessage?: string

  @Example(targetedStylingExample)
  declare styling?: CodeEditorStyling
}
