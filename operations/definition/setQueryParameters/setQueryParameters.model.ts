import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { SetQueryParametersOperationOptions } from './setQueryParameters.options'
import { Alpha, DisplayName, TrimmedDescription } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Query Parameters')
@DiscriminatorValue(OperationTypes.SET_QUERY_PARAMETERS)
@TrimmedDescription(`
  Sets query parameters on the URL, overriding existing ones.
`)
@Alpha()
@AutogenDisabled()
export class SetQueryParametersOperation extends Operation<OperationTypes.SET_QUERY_PARAMETERS> {
  @Const(OperationTypes.SET_QUERY_PARAMETERS)
  public type = OperationTypes.SET_QUERY_PARAMETERS as const

  @Required()
  public options: SetQueryParametersOperationOptions = new SetQueryParametersOperationOptions()
}
