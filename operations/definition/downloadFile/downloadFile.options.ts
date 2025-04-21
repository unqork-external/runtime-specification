import { Description, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class DownloadFileOperationOptions extends OperationOptions {
  @Required()
  @Description('URL to the file to be downloaded')
  url: string

  @Required()
  @Description('Name of the file that it will be downloaded as')
  filename: string
}
