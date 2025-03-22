import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { SetQueryParametersOperationOptions } from './setQueryParameters.options'
import { Alpha, TrimmedDescription } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_QUERY_PARAMETERS)
@TrimmedDescription(`
  This operation should be used to set query parameters on the url.
  This operation will override the existing query parameters on the url.
`)
@Alpha()
@AutogenDisabled()
export class SetQueryParametersOperation extends Operation<OperationTypes.SET_QUERY_PARAMETERS> {
  @Const(OperationTypes.SET_QUERY_PARAMETERS)
  public type = OperationTypes.SET_QUERY_PARAMETERS as const

  @Required()
  public options: SetQueryParametersOperationOptions = new SetQueryParametersOperationOptions()
}
