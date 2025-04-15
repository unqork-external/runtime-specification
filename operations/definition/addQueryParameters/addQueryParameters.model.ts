import { Const, Description, DiscriminatorValue, Required } from '@tsed/schema'

import { AddQueryParametersOperationOptions } from './addQueryParameters.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Add Query Parameters')
@DiscriminatorValue(OperationTypes.ADD_QUERY_PARAMETERS)
@Description('Adds new query parameters to the URL.')
@Alpha()
@AutogenDisabled()
export class AddQueryParametersOperation extends Operation<OperationTypes.ADD_QUERY_PARAMETERS> {
  @Const(OperationTypes.ADD_QUERY_PARAMETERS)
  public type = OperationTypes.ADD_QUERY_PARAMETERS as const

  @Required()
  public options: AddQueryParametersOperationOptions = new AddQueryParametersOperationOptions()
}
