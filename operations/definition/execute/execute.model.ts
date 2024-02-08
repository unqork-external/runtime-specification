import { DiscriminatorValue, Required } from '@tsed/schema'

import { ExecuteOptions } from './execute.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.EXECUTE)
export class ExecuteOperation extends Operation<OperationTypes.EXECUTE> {
  @Required()
  public options: ExecuteOptions = new ExecuteOptions()
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * TODO: Kill / Deprecate me.
 * My required description
 *
 * @param targetKey - the target to execute
 */
export const createExecuteOperation = (targetKey: string) => {
  return {
    type: OperationTypes.EXECUTE,
    options: {
      targetKey,
      shouldExecute: true,
    },
  }
}
