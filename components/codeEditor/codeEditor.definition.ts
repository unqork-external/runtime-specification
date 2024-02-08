import { Required, DiscriminatorValue, Description, Property } from '@tsed/schema'

import { CodeEditorFormat } from './codeEditorFormat'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('codeEditor')
export class CodeEditorComponentDefinition extends BaseComponentDefinition {
  @Property(InputField)
  @Description('Field settings of the codeEditor.')
  field: InputField = new InputField()

  @Property(Display)
  display: Display = new Display()

  @Required()
  type: 'codeEditor' = 'codeEditor' as const

  @Description('Code editor value')
  declare value: string

  @Property(CodeEditorFormat)
  @Description('Formatting options')
  format: CodeEditorFormat = new CodeEditorFormat()
}
