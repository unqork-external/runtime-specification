import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ExecuteExternalCommandOperationOptions } from './executeExternalCommand.options'
import { OpsBuilderStable, Stable } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.EXECUTE_EXTERNAL_COMMAND)
@Description('The Execute External Command operation allows interacting with the external or parent application.')
@Stable()
@OpsBuilderStable()
export class ExecuteExternalCommandOperation extends Operation<OperationTypes.EXECUTE_EXTERNAL_COMMAND> {
  @Required()
  public type = OperationTypes.EXECUTE_EXTERNAL_COMMAND as const

  @Required()
  public options: ExecuteExternalCommandOperationOptions = new ExecuteExternalCommandOperationOptions()
}
