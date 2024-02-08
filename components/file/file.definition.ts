import { Const, Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'
import { Validation } from '../../validations/validation'

export type UploadFile = Pick<File, 'name' | 'size' | 'type'> & {
  data: Blob
  id: string
  url: string
  storage: 'base64' | 'cloud'
}

export type FileSubmissionValue = {
  storage: string
  name: string
  size: number
  type: string
  id?: string
  url?: string
  data?: Blob
}

/**
 * R1 defaults
 */
const DEFAULT_VALUES = {
  browseLink: 'browse',
  compressFile: true,
  dragDropNotSupported: 'File Drag/Drop is not supported for this browser',
  dropFilesLabel: 'Drag & drop your files here, or',
  fileNameLabel: 'File',
  parseOnUpload: false,
  removeLink: 'remove file',
  sizeLabel: 'Size',
  startingUploadMessage: 'Starting upload',
  uqMaxFileSizeMB: '',
}

export class FileOptions {
  /**
   * Display Settings
   */
  @Optional()
  @Description('Whether a user can select multiple files to upload')
  multiple?: boolean

  @Optional()
  @Description('Whether uploaded image files should render a preview')
  showImagePreview?: boolean

  @Description('Whether uploaded image files should render a preview')
  imagePreviewSize: number

  @Default(DEFAULT_VALUES.startingUploadMessage)
  @Description('Descriptive text shown to users when upload begins')
  startingUploadMessage: string = DEFAULT_VALUES.startingUploadMessage

  @Default(DEFAULT_VALUES.dropFilesLabel)
  @Description('Text label inside the boundaries of the drag and drop area')
  dropFilesLabel: string = DEFAULT_VALUES.dropFilesLabel

  @Default(DEFAULT_VALUES.browseLink)
  @Description('Link text to browse computer file system; appended to end of dropFilesLabel')
  browseLink: string = DEFAULT_VALUES.browseLink

  @Default(DEFAULT_VALUES.dragDropNotSupported)
  @Description("Display text if user's browser doesn't support drag and drop")
  dragDropNotSupported: string = DEFAULT_VALUES.dragDropNotSupported

  @Default(DEFAULT_VALUES.fileNameLabel)
  @Description('The header label for the column listing the individual file names')
  fileNameLabel: string = DEFAULT_VALUES.fileNameLabel

  @Default(DEFAULT_VALUES.removeLink)
  @Description('Aria-label passed to remove button inside uploaded files table')
  removeLink: string = DEFAULT_VALUES.removeLink

  @Default(DEFAULT_VALUES.sizeLabel)
  @Description('The header label for the column listing the file sizes')
  sizeLabel: string = DEFAULT_VALUES.sizeLabel

  /**
   * Action Settings
   */
  @Optional()
  @Description('The component to trigger post processing. Value is a Property ID.')
  postTrigger?: string

  /**
   * Validation Settings
   */
  @Default(DEFAULT_VALUES.uqMaxFileSizeMB)
  @Description('Maximum file size in megabytes')
  uqMaxFileSizeMB: number | string = DEFAULT_VALUES.uqMaxFileSizeMB

  @Optional()
  @Description('A quick tip explaining the file size limits of your File component')
  maxFileSizeMessage?: string

  @Optional()
  @Description('Error message below uploaded files that exceed the maximum size')
  maxFileSizeWarning?: string

  @Description('User provided valid file types (comma delimited string list)')
  @Default('*')
  filePattern: string = '*'

  @Optional()
  @Description('Maximum accepted number of files')
  maxNumberOfFiles?: number

  /**
   * Advanced Settings
   */

  @Default(DEFAULT_VALUES.compressFile)
  @Description('Images compression (only supports .jpg and .png image formats)')
  compressFile: boolean = DEFAULT_VALUES.compressFile

  @Description('If user uploads a multi-tab Excel file, parse all tabs into one JSON structure')
  multiTabExcel: boolean

  @Default(DEFAULT_VALUES.parseOnUpload)
  @Description('File data encoded as Base64 string as part of submission data')
  parseOnUpload: boolean = DEFAULT_VALUES.parseOnUpload

  @Optional()
  @Description('Custom CSS class applied to element')
  customClass?: string
}

@DiscriminatorValue('file')
export class FileDefinition extends BaseComponentDefinition {
  @Required()
  @Const('file')
  @Description('Describes the File type')
  type: string = 'file' as const

  @Property(Display)
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings for the File component.')
  field: InputField = new InputField()

  @Description('Settings specific to the File component')
  options: FileOptions = new FileOptions()

  @Property(Validation)
  @Description('Validation rules')
  validation: Validation = new Validation()

  // No decorator, this is local state for the File component
  fileData?: UploadFile[]

  @Description('Value of the File component. Will be undefined if not set.')
  declare value?: Array<FileSubmissionValue>
}
