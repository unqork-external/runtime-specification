import { Default, Description } from '@tsed/schema'

export class ModuleWorkflowSettings {
  @Description('preErrorTrigger is the component to trigger before the validation action runs.')
  preErrorTrigger?: string

  @Description('preSaveTrigger is the component to trigger concurrently when saving submission is made.')
  preSaveTrigger?: string

  @Description('postSaveTrigger is the component to trigger after a successful save submission is made.')
  postSaveTrigger?: string

  @Description('validateOnOpen boolean to run validation when the form is first opened.')
  @Default(false)
  validateOnOpen?: boolean
}
