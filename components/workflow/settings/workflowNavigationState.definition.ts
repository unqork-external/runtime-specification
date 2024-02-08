import { Default, Description } from '@tsed/schema'

export class WorkflowNavigationState {
  @Description('True if this step has been visited before for the current submission, false otherwise.')
  @Default(false)
  visited?: boolean = false

  @Description('True if this step was valid the last time it was visited, false otherwise.')
  @Default(false)
  valid?: boolean = false
}
