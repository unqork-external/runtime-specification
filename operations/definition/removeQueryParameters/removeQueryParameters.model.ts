import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { RemoveQueryParametersOperationOptions } from './removeQueryParameters.options'
import { Alpha, DisplayName, TrimmedDescription } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Remove Query Parameters')
@DiscriminatorValue(OperationTypes.REMOVE_QUERY_PARAMETERS)
@TrimmedDescription(`
  This operation should be used to remove query parameters on the url.
`)
@Alpha()
@AutogenDisabled()
export class RemoveQueryParametersOperation extends Operation<OperationTypes.REMOVE_QUERY_PARAMETERS> {
  @Const(OperationTypes.REMOVE_QUERY_PARAMETERS)
  public type = OperationTypes.REMOVE_QUERY_PARAMETERS as const

  @Required()
  public options: RemoveQueryParametersOperationOptions = new RemoveQueryParametersOperationOptions()
}
