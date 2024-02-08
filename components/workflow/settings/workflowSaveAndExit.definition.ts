import { Description } from '@tsed/schema'

export class WorkflowSaveAndExitAlertSettings {
  @Description('The Save and Exit alert text that is displayed when the used clicks on the Save and Exit button.')
  text?: string

  @Description('The Save and Exit alert cancel button text.')
  cancelButtonText: string = 'Cancel'

  @Description('The Save and Exit alert confirmation button text.')
  confirmationButtonText: string = 'OK'
}
