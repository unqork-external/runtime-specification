import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { ClearQueryParametersOperationOptions } from './clearQueryParameters.options'
import { TrimmedDescription } from '../../../../decorators'
import { Beta } from '../../../../decorators/stability/beta.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CLEAR_QUERY_PARAMETERS)
@TrimmedDescription(`
  This operation should be used to clear query parameters on the url.
`)
@Beta()
export class ClearQueryParametersOperation extends Operation<OperationTypes.CLEAR_QUERY_PARAMETERS> {
  @Const(OperationTypes.CLEAR_QUERY_PARAMETERS)
  public type = OperationTypes.CLEAR_QUERY_PARAMETERS as const

  @Required()
  public options: ClearQueryParametersOperationOptions = new ClearQueryParametersOperationOptions()
}
