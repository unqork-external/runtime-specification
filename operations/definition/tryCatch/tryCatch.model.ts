import { DiscriminatorValue, Required } from '@tsed/schema'

import { TryCatchOperationOptions } from './tryCatch.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TRY_CATCH)
export class TryCatchOperation extends Operation<OperationTypes.TRY_CATCH> {
  @Required()
  public options: TryCatchOperationOptions = new TryCatchOperationOptions()
}
