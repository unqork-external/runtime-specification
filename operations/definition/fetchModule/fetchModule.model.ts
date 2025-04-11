import { DiscriminatorValue, Required } from '@tsed/schema'

import { FetchModuleOperationOptions } from './fetchModule.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Fetch Module')
@DiscriminatorValue(OperationTypes.FETCH_MODULE)
@Alpha()
@AutogenDisabled()
export class FetchModuleOperation extends Operation<OperationTypes.FETCH_MODULE> {
  public type = OperationTypes.FETCH_MODULE as const
  @Required()
  public options: FetchModuleOperationOptions = new FetchModuleOperationOptions()
}
