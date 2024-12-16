import { Description, Ignore, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class SaveAndExitAlertSetting {
  @Description('message for save and exit modal')
  saveAndExitMessage?: string

  @Description('The cancel button text for save and exit modal.')
  cancelButtonText: string = 'Cancel'

  @Description('The confirmation button text for save and exit modal.')
  confirmButtonText: string = 'OK'
}

export class WorkflowSaveAndExitOperationOptions extends OperationOptions {
  // This can be removed once BaseOperationOperations is refactored.
  @Description('targetKey refers to the intended target to manipulate.')
  // we can ignore properties with type never - Remove this decorator if this type is changed
  @Ignore()
  targetKey?: never

  @Required()
  @Description('current step of the workflow')
  currentStepPath: string

  @Description('save and exit modal alert setting including save and exit message, button texts')
  saveAndExitAlertSetting: SaveAndExitAlertSetting
}
