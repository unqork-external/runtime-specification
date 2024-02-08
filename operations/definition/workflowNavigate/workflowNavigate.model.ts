import { DiscriminatorValue, Required } from '@tsed/schema'

import { WorkflowNavigateOperationOptions } from './workflowNavigate.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.WORKFLOW_NAVIGATE)
export class WorkflowNavigateOperation extends Operation<OperationTypes.WORKFLOW_NAVIGATE> {
  @Required()
  public options: WorkflowNavigateOperationOptions = new WorkflowNavigateOperationOptions()
}
