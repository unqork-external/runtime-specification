import { Default, Description } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class WorkflowFlashMessageSettings {
  @Description('Text for the flash message.')
  text?: string

  @Default('warning')
  @Description('Status of the flash message.')
  status: 'info' | 'success' | 'danger' | 'warning' = 'warning'

  @Default(false)
  @Description('Controls if the flash message is dismissible or not.')
  dismissible: boolean = false

  @Default(false)
  @Description(
    trimAll(`
      Controls if flash message appears or not. dismissible flash messages
      can be hidden by changing this property to false. Defaults to false 
    `),
  )
  show: boolean = false
}
