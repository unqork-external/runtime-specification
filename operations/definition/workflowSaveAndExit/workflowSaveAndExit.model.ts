import { DiscriminatorValue, Required } from '@tsed/schema'

import { WorkflowSaveAndExitOperationOptions } from './workflowSaveAndExit.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.WORKFLOW_SAVE_AND_EXIT)
@Alpha()
export class WorkflowSaveAndExitOperation extends Operation<OperationTypes.WORKFLOW_SAVE_AND_EXIT> {
  public type = OperationTypes.WORKFLOW_SAVE_AND_EXIT as const

  @Required()
  public options: WorkflowSaveAndExitOperationOptions = new WorkflowSaveAndExitOperationOptions()
}
