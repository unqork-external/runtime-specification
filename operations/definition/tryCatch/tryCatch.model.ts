import { DiscriminatorValue, Required } from '@tsed/schema'

import { TryCatchOperationOptions } from './tryCatch.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

export const tryCatchOperation = 'tryCatchOperation'

@DisplayName('Try Catch')
@DiscriminatorValue(OperationTypes.TRY_CATCH)
@Alpha()
@AutogenDisabled()
export class TryCatchOperation extends Operation<OperationTypes.TRY_CATCH> {
  public type = OperationTypes.TRY_CATCH as const

  @Required()
  public options: TryCatchOperationOptions = new TryCatchOperationOptions()
}
