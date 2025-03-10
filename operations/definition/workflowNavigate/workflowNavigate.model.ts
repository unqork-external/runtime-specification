import { DiscriminatorValue, Required } from '@tsed/schema'

import { WorkflowNavigateOperationOptions } from './workflowNavigate.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.WORKFLOW_NAVIGATE)
@Alpha()
export class WorkflowNavigateOperation extends Operation<OperationTypes.WORKFLOW_NAVIGATE> {
  public type = OperationTypes.WORKFLOW_NAVIGATE as const

  @Required()
  public options: WorkflowNavigateOperationOptions = new WorkflowNavigateOperationOptions()
}
