import { Default, Description } from '@tsed/schema'

import { filePatternExamples } from './file.examples'
import { Examples } from '../../../decorators/schema/examples.decorator'

/**
 * R1 defaults
 */
const FILE_DEFAULTS = {
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
  filePattern: '*',
  multiTabExcel: false,
}

@Description('Settings specific to the File component')
export class FileOptions {
  @Description('Whether a user can select multiple files to upload')
  multiple?: boolean

  @Description('Whether uploaded image files should render a preview')
  showImagePreview?: boolean

  @Description('The maximum width in pixels of image previews to show if previews are enabled')
  imagePreviewSize?: number

  @Default(FILE_DEFAULTS.startingUploadMessage)
  @Description('Text shown to users when upload begins')
  startingUploadMessage: string = FILE_DEFAULTS.startingUploadMessage

  @Default(FILE_DEFAULTS.dropFilesLabel)
  @Description('Text label inside the boundaries of the drag and drop area')
  dropFilesLabel: string = FILE_DEFAULTS.dropFilesLabel

  @Default(FILE_DEFAULTS.browseLink)
  @Description('Link text to browse computer file system; appended to end of dropFilesLabel')
  browseLink: string = FILE_DEFAULTS.browseLink

  @Default(FILE_DEFAULTS.dragDropNotSupported)
  @Description("Text to display if user's browser doesn't support drag and drop")
  dragDropNotSupported: string = FILE_DEFAULTS.dragDropNotSupported

  @Default(FILE_DEFAULTS.fileNameLabel)
  @Description('The header label for the column listing the individual file names')
  fileNameLabel: string = FILE_DEFAULTS.fileNameLabel

  @Default(FILE_DEFAULTS.removeLink)
  @Description('Aria-label passed to remove button inside uploaded files table')
  removeLink: string = FILE_DEFAULTS.removeLink

  @Default(FILE_DEFAULTS.sizeLabel)
  @Description('The header label for the column listing the file sizes')
  sizeLabel: string = FILE_DEFAULTS.sizeLabel

  /**
   * Validation Settings
   */
  @Default(FILE_DEFAULTS.uqMaxFileSizeMB)
  @Description('Maximum file size in megabytes')
  uqMaxFileSizeMB: number | string = FILE_DEFAULTS.uqMaxFileSizeMB

  @Description('A quick tip explaining the file size limits of your File component')
  maxFileSizeMessage?: string

  @Description('Error message below uploaded files that exceed the maximum size')
  maxFileSizeWarning?: string

  @Description(`User provided valid file types as a list of comma delimited strings. Use '*' to accept all file types.`)
  @Default(FILE_DEFAULTS.filePattern)
  @Examples(filePatternExamples)
  filePattern: string = FILE_DEFAULTS.filePattern

  @Description('Maximum accepted number of files')
  maxNumberOfFiles?: number

  /**
   * Advanced Settings
   */
  @Default(FILE_DEFAULTS.compressFile)
  @Description('Compresses images if enabled (only supports .jpg and .png image formats)')
  compressFile: boolean = FILE_DEFAULTS.compressFile

  @Default(FILE_DEFAULTS.multiTabExcel)
  @Description('If user uploads a multi-tab Excel file, parse all tabs into one JSON structure')
  multiTabExcel: boolean = FILE_DEFAULTS.multiTabExcel

  @Default(FILE_DEFAULTS.parseOnUpload)
  @Description('File data encoded as Base64 string as part of submission data')
  parseOnUpload: boolean = FILE_DEFAULTS.parseOnUpload

  @Description('When parseOnUpload is TRUE, this character will be used to separate values.')
  delimiterChar?: string
}
