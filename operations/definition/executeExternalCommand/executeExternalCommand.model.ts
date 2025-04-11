import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { ExecuteExternalCommandOperationOptions } from './executeExternalCommand.options'
import { DisplayName, Stable, TrimmedDescription } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Execute External Command')
@DiscriminatorValue(OperationTypes.EXECUTE_EXTERNAL_COMMAND)
@TrimmedDescription(`
  The Execute External Command operation allows Embedded Vega applications to interact with their parent Centauri
  application by triggering logic components and setting parent component values, as specified by the operation options.
`)
@Stable()
export class ExecuteExternalCommandOperation extends Operation<OperationTypes.EXECUTE_EXTERNAL_COMMAND> {
  @Required()
  @Const(OperationTypes.EXECUTE_EXTERNAL_COMMAND)
  public type = OperationTypes.EXECUTE_EXTERNAL_COMMAND as const

  @Required()
  public options: ExecuteExternalCommandOperationOptions = new ExecuteExternalCommandOperationOptions()
}
