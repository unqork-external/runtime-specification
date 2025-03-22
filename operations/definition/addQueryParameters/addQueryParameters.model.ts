import { Const, DiscriminatorValue, Required } from '@tsed/schema'

import { AddQueryParametersOperationOptions } from './addQueryParameters.options'
import { Alpha, TrimmedDescription } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.ADD_QUERY_PARAMETERS)
@TrimmedDescription(`
  This operation should be used to add new query parameters to the existing query parameters on the url.
`)
@Alpha()
@AutogenDisabled()
export class AddQueryParametersOperation extends Operation<OperationTypes.ADD_QUERY_PARAMETERS> {
  @Const(OperationTypes.ADD_QUERY_PARAMETERS)
  public type = OperationTypes.ADD_QUERY_PARAMETERS as const

  @Required()
  public options: AddQueryParametersOperationOptions = new AddQueryParametersOperationOptions()
}
