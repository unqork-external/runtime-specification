import { DiscriminatorValue, Required } from '@tsed/schema'

import { FetchModuleOperationOptions } from './fetchModule.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.FETCH_MODULE)
export class FetchModuleOperation extends Operation<OperationTypes.FETCH_MODULE> {
  public type = OperationTypes.FETCH_MODULE as const
  @Required()
  public options: FetchModuleOperationOptions = new FetchModuleOperationOptions()
}
