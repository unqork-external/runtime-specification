import { Description, Optional, Required } from '@tsed/schema'

export type IFrameOptionsSandbox =
  | 'allow-forms'
  | 'allow-modals'
  | 'allow-popups'
  | 'allow-same-origin'
  | 'allow-scripts'

export class IFrameOptions {
  @Required()
  @Description('The source URL displayed in the IFrame')
  src: string

  @Optional()
  @Description('The width of the IFrame in pixels')
  width?: number

  @Optional()
  @Description('The height of the IFrame in pixels')
  height?: number

  @Optional()
  @Description('The "sandbox" setting of the IFrame')
  sandbox?: Array<IFrameOptionsSandbox>
}
