import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ApiCallOptions } from './apiCall.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.API_CALL)
@Description(
  'An operation to represent legacy behavior from the plugin component. Performs REST API calls with a lot of options.',
)
@Alpha()
export class ApiCallOperation extends Operation<'API_CALL'> {
  public type = OperationTypes.API_CALL as const
  @Required()
  public options: ApiCallOptions = new ApiCallOptions()
}
