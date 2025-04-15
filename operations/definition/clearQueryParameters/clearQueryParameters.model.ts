import { Const, Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ClearQueryParametersOperationOptions } from './clearQueryParameters.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Clear Query Parameters')
@DiscriminatorValue(OperationTypes.CLEAR_QUERY_PARAMETERS)
@Description('Clears all query parameters from the URL.')
@Alpha()
@AutogenDisabled()
export class ClearQueryParametersOperation extends Operation<OperationTypes.CLEAR_QUERY_PARAMETERS> {
  @Const(OperationTypes.CLEAR_QUERY_PARAMETERS)
  public type = OperationTypes.CLEAR_QUERY_PARAMETERS as const

  @Required()
  public options: ClearQueryParametersOperationOptions = new ClearQueryParametersOperationOptions()
}
