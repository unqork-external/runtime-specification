import { Description, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class DownloadFileOperationOptions extends OperationOptions {
  @Required()
  @Description('URL to the file to be downloaded')
  url: string

  @Required()
  @Description('String for the name of the file to be saved as (default: filename in the url)')
  filename: string
}
