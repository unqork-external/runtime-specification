import { CollectionOf, Description, Optional, Required } from '@tsed/schema'

export enum IFrameOptionsSandboxEnum {
  AllowForms = 'allow-forms',
  AllowModals = 'allow-modals',
  AllowPopups = 'allow-popups',
  AllowSameOrigin = 'allow-same-origin',
  AllowScripts = 'allow-scripts',
}

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
  @CollectionOf(IFrameOptionsSandboxEnum)
  sandbox?: Array<IFrameOptionsSandboxEnum>
}
