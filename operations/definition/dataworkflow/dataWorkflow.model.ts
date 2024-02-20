import { DiscriminatorValue, Required } from '@tsed/schema'

import { DataWorkflowOptions } from './dataworkflow.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DATA_WORKFLOW)
export class DataWorkflowOperation extends Operation<OperationTypes.DATA_WORKFLOW> {
  public type = OperationTypes.DATA_WORKFLOW as const

  @Required()
  public options: DataWorkflowOptions = new DataWorkflowOptions()
}

export const createDataWorkflowOperation = (options: DataWorkflowOptions): DataWorkflowOperation => {
  return {
    type: OperationTypes.DATA_WORKFLOW,
    options,
  }
}
