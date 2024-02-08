import { Required, Default, Description, Property } from '@tsed/schema'

import { WorkflowNavigationState } from './workflowNavigationState.definition'

export class WorkflowNavigationStep {
  @Default(false)
  @Description('True if this is the currently shown step, false otherwise')
  current: boolean = false

  @Required()
  @Description('Name of the step.')
  name: string

  @Required()
  @Description('Unique string identifier for this step.')
  path: string

  @Required()
  @Description('The percentage of the navigation steps are is complete when you are on this step.')
  percentage: number

  @Description('The percentage of the navigation group that is complete when you are on this step.')
  percentageForGroup?: number

  @Required()
  @Property(WorkflowNavigationState)
  @Description('Information about if this step has been visited before and if it is valid.')
  navigationState = new WorkflowNavigationState()

  @Required()
  @Description('The step number of this step within all navigation steps.')
  stepNumber: number

  @Description('The step number of this step within the navigation group.')
  stepNumberForGroup?: number

  @Default(false)
  @Description('True if this step is the last step, false otherwise.')
  lastStep: boolean = false
}
