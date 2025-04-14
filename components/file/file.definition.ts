import { Const, Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { FileOptions } from './file.options'
import { FileSubmissionValue, UploadFile } from './file.types'
import { FileStyling } from './styling/file.styling'
import { FileTargets } from './targets/fileTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { InputDisplay } from '../../component-composition/display/component.display'
import { InputField } from '../../component-composition/input/component.input'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { Validation } from '../../validations/validation'

@TrimmedDescription(`
  File upload component. Displays a file input element for users to drag and drop a file
  or browse using the native file dialog.
`)
@DiscriminatorValue('file')
@ViewTargets(FileTargets)
export class FileComponentDefinition extends BaseComponentDefinition {
  @Const('file')
  type: string = 'file' as const

  @Property()
  display: InputDisplay = new InputDisplay()

  @Property()
  field: InputField = new InputField()

  @Optional()
  options: FileOptions = new FileOptions()

  @Property()
  validation: Validation = new Validation()

  // No decorator, this is local state for the File component
  fileData?: UploadFile[]

  @Description('Value of the File component. Will be undefined if not set.')
  declare value?: Array<FileSubmissionValue>

  @Examples(targetedStylingExample)
  @Description('Object that maps customized CSS styling to specific targets on the File.')
  declare styling?: FileStyling

  @Property()
  declare signals: SignalTargets<FileTargets>
}
