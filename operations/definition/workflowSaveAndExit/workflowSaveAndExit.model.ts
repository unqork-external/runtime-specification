import { DiscriminatorValue, Required } from '@tsed/schema'

import { WorkflowSaveAndExitOperationOptions } from './workflowSaveAndExit.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.WORKFLOW_SAVE_AND_EXIT)
export class WorkflowSaveAndExitOperation extends Operation<OperationTypes.WORKFLOW_SAVE_AND_EXIT> {
  @Required()
  public options: WorkflowSaveAndExitOperationOptions = new WorkflowSaveAndExitOperationOptions()
}
