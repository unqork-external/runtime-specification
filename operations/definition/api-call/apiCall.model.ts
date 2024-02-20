import { DiscriminatorValue, Required } from '@tsed/schema'

import { ApiCallOptions } from './apiCall.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.API_CALL)
export class ApiCallOperation extends Operation<'API_CALL'> {
  public type = OperationTypes.API_CALL as const
  @Required()
  public options: ApiCallOptions = new ApiCallOptions()
}
