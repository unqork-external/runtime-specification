import { DiscriminatorValue, Required } from '@tsed/schema'

import { TryCatchOperationOptions } from './tryCatch.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

export const tryCatchOperation = 'tryCatchOperation'

@DiscriminatorValue(OperationTypes.TRY_CATCH)
@Alpha()
export class TryCatchOperation extends Operation<OperationTypes.TRY_CATCH> {
  public type = OperationTypes.TRY_CATCH as const

  @Required()
  public options: TryCatchOperationOptions = new TryCatchOperationOptions()
}
