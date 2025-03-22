import { DiscriminatorValue, Required } from '@tsed/schema'

import { AsyncAllSettledOperationOptions } from './asyncAllSettled.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.ASYNC_ALL_SETTLED)
@Alpha()
@AutogenDisabled()
export class AsyncAllSettledOperation extends Operation<OperationTypes.ASYNC_ALL_SETTLED> {
  public type = OperationTypes.ASYNC_ALL_SETTLED as const

  @Required()
  public options: AsyncAllSettledOperationOptions = new AsyncAllSettledOperationOptions()
}
