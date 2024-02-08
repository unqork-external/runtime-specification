import { DiscriminatorValue, Required } from '@tsed/schema'

import { ApiCallOptions } from './apiCall.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.API_CALL)
export class ApiCallOperation extends Operation<OperationTypes.API_CALL> {
  @Required()
  public options: ApiCallOptions = new ApiCallOptions()
}
