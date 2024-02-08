import { Required, Description } from '@tsed/schema'

export class WorkflowData {
  @Required()
  @Description('The id of the currently viewed workflow')
  workflowId: string

  @Required()
  @Description('The path (unique identifier) of the currently viewed workflow')
  workflowPath: string
}
