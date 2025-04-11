import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { ClearQueryParametersOperationOptions } from './clearQueryParameters.options'
import { Alpha, DisplayName, TrimmedDescription } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Clear Query Parameters')
@DiscriminatorValue(OperationTypes.CLEAR_QUERY_PARAMETERS)
@TrimmedDescription(`
  This operation should be used to clear query parameters on the url.
`)
@Alpha()
@AutogenDisabled()
export class ClearQueryParametersOperation extends Operation<OperationTypes.CLEAR_QUERY_PARAMETERS> {
  @Const(OperationTypes.CLEAR_QUERY_PARAMETERS)
  public type = OperationTypes.CLEAR_QUERY_PARAMETERS as const

  @Required()
  public options: ClearQueryParametersOperationOptions = new ClearQueryParametersOperationOptions()
}
