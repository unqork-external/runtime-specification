import { Description, Optional, Required } from '@tsed/schema'

export class IFrameOptions {
  @Optional()
  @Description('The width of the IFrame in pixels')
  width?: number

  @Optional()
  @Description('The height of the IFrame in pixels')
  height?: number

  @Required()
  @Description('The source URL displayed in the IFrame')
  src: string
}
