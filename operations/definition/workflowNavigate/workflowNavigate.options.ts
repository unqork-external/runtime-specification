import { Description, Enum, Example, Property, Required } from '@tsed/schema'

import { WorkflowNavigationActionType } from '../../../base-types'
import { OperationOptions } from '../../interface'
export class SuccessMessageOptions {
  @Description('The body text for the success modal.')
  successMessage: string = 'Success!'

  @Description('The confirmation button text for the success modal.')
  confirmButtonText: string = 'OK'
}
export class WorkflowTriggers {
  @Description('preErrorTrigger is the component to trigger before the validation action runs.')
  preErrorTrigger?: string

  @Description('preSaveTrigger is the component to trigger concurrently when saving submission is made.')
  preSaveTrigger?: string

  @Description('postSaveTrigger is the component to trigger after a successful save submission is made.')
  postSaveTrigger?: string
}
export class ValidationOptions {
  @Description('The title for the error modal.')
  errorTitle: string = 'Oops - {{ errors }} error(s) have been found!'

  @Description('The body text for the error modal.')
  errorMessage: string = 'Please fix the fields outlines in red.'

  @Description('The confirmation button text for the error modal.')
  confirmButtonText: string = 'OK'
}

export class ButtonOptions {
  @Description('control button disabled state when a submission is created')
  preventDisableOnSubmitting?: boolean

  @Description('control button disabled state when firing triggers/events')
  oneClickOnly: boolean
}
export class WorkflowNavigateOperationOptions extends OperationOptions {
  @Description('The key or path to the container we intend to target for an operation')
  targetKey: string

  @Required()
  @Enum(WorkflowNavigationActionType)
  @Description('Workflow navigation action type.')
  action: WorkflowNavigationActionType

  @Description("Workflow target step, only applicable to 'goto'.")
  @Example('some step', 'step 2')
  targetStep?: string

  @Property(ValidationOptions)
  @Description('Workflow and step specific validation options.')
  validationOptions?: ValidationOptions

  @Property(SuccessMessageOptions)
  @Description('Message options for success modal')
  successMessageOptions?: SuccessMessageOptions

  @Property(WorkflowTriggers)
  @Description('Triggers should be executed when workflow navigation happens.')
  triggers?: WorkflowTriggers
}
