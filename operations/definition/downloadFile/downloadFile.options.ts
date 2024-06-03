import { Description, Required } from '@tsed/schema'

export class DownloadFileOperationOptions {
  @Required()
  @Description('URL to the file to be downloaded')
  url: string

  @Required()
  @Description('String for the name of the file to be saved as (default: filename in the url)')
  filename: string
}
