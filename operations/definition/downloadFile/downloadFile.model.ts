import { DiscriminatorValue, Required } from '@tsed/schema'

import { DownloadFileOperationOptions } from './downloadFile.options'
import { TrimmedDescription, Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Download File')
@DiscriminatorValue(OperationTypes.DOWNLOAD_FILE)
@TrimmedDescription(`
  Downloads a file for a user, and allows users to define a custom file name.
  As long as the URL is accessible, the web application should use the native download html5 feature.
`)
@Alpha()
@AutogenDisabled()
export class DownloadFileOperation extends Operation<OperationTypes.DOWNLOAD_FILE> {
  public type = OperationTypes.DOWNLOAD_FILE as const

  @Required()
  public options: DownloadFileOperationOptions = new DownloadFileOperationOptions()
}
