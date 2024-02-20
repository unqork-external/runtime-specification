import { DiscriminatorValue, Required } from '@tsed/schema'

import { TryCatchOperationOptions } from './tryCatch.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TRY_CATCH)
export class TryCatchOperation extends Operation<OperationTypes.TRY_CATCH> {
  public type = OperationTypes.TRY_CATCH as const

  @Required()
  public options: TryCatchOperationOptions = new TryCatchOperationOptions()
}
