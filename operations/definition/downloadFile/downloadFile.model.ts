import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { DownloadFileOperationOptions } from './downloadFile.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Download File')
@DiscriminatorValue(OperationTypes.DOWNLOAD_FILE)
@Description("Downloads a file to the end-user's computer.")
@Alpha()
@AutogenDisabled()
export class DownloadFileOperation extends Operation<OperationTypes.DOWNLOAD_FILE> {
  public type = OperationTypes.DOWNLOAD_FILE as const

  @Required()
  public options: DownloadFileOperationOptions = new DownloadFileOperationOptions()
}
