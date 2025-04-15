import { Const, Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ExecuteExternalCommandOperationOptions } from './executeExternalCommand.options'
import { DisplayName, Stable } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Execute External Command')
@DiscriminatorValue(OperationTypes.EXECUTE_EXTERNAL_COMMAND)
@Description('Triggers Centauri logic components from within a Cross Runtime Support (CRS) Vega Panel.')
@Stable()
export class ExecuteExternalCommandOperation extends Operation<OperationTypes.EXECUTE_EXTERNAL_COMMAND> {
  @Required()
  @Const(OperationTypes.EXECUTE_EXTERNAL_COMMAND)
  public type = OperationTypes.EXECUTE_EXTERNAL_COMMAND as const

  @Required()
  public options: ExecuteExternalCommandOperationOptions = new ExecuteExternalCommandOperationOptions()
}
