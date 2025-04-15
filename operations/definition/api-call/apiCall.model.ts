import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ApiCallOptions } from './apiCall.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('API Call')
@DiscriminatorValue(OperationTypes.API_CALL)
@Description('Represents legacy behavior from the Plugin component performing REST API calls.')
@Alpha()
@AutogenDisabled()
export class ApiCallOperation extends Operation<OperationTypes.API_CALL> {
  public type = OperationTypes.API_CALL as const
  @Required()
  public options: ApiCallOptions = new ApiCallOptions()
}
