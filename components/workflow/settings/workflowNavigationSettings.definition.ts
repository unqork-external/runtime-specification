import { Required, Optional, Default, Description, OneOf, CollectionOf, Property } from '@tsed/schema'

import { WorkflowNavigationStep } from './workflowNavigationStep.definition'
import { trimAll } from '../../../../utilities'

export class WorkflowNavigationSettings {
  @Required()
  @Description('Information about the current shown navigation step')
  @Property(WorkflowNavigationStep)
  currentStep: WorkflowNavigationStep

  @Required()
  @Description('The path (unique identifier) of the currently shown navigation step')
  currentStepPath: string

  @Default('steps')
  @Description('Controls if the navigation progress will be displayed as a list of steps or as a percentage bar')
  displayType: 'steps' | 'percentage' = 'steps'

  @Default(false)
  @Description(
    'Controls if the navigation progress will display as horizontal or vertical. Default `false` (horizontal)',
  )
  enableVerticalNavDisplay: boolean = false

  @Default(false)
  @Description(
    'Controls if "go to" navigation is allowed. i.e. User can click on a prior navigation step to navigate to it',
  )
  gotoNavigationEnabled: boolean = false

  @Default('auto')
  @Description(
    trimAll(`
      Determines the type of navigation jumps that can occur in the workflow.
      "auto" is the default and is more restrictive.
      "manual" allows for more freedom. i.e. Jumping forward multiple steps.
    `),
  )
  stateControlType: 'auto' | 'manual' = 'auto'

  @Required()
  @Description(
    trimAll(`
      List of all steps that are possible to navigate to from the current step.
      Used to generate navigation progress steps or percentage bar.
    `),
  )
  @CollectionOf(WorkflowNavigationStep)
  steps: WorkflowNavigationStep[]

  @Default(false)
  @Description('Controls if validation will also occur when navigating to a prior step in the workflow.')
  validateOnBackwardNavigation: boolean = false

  @Default(false)
  @Description('Controls whether to allow forward navigation when validation errors are present.')
  allowNavigationWithErrors: boolean = false

  @Default(false)
  @Description(
    trimAll(`
      Controls if non-persisted data will also be sent to the server for use in server-side execute modules (script tasks).
    `),
  )
  passNonPersistedData: boolean = false

  @Default(false)
  @Description(
    trimAll(`
      Controls if non-persisted data from the current module will be retained in the client-side submission data when
      the next module in the workflow is shown. Default false (non-persisted data will remain).
    `),
  )
  onlyKeepPersistedDataOnNavigation: boolean = false
}
