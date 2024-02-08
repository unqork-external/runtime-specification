import { DiscriminatorValue, Required } from '@tsed/schema'

import { DownloadFileOperationOptions } from './downloadFile.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DOWNLOAD_FILE)
export class DownloadFileOperation extends Operation<OperationTypes.DOWNLOAD_FILE> {
  @Required()
  public options: DownloadFileOperationOptions = new DownloadFileOperationOptions()
}
