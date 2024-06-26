import { DiscriminatorValue, Required } from '@tsed/schema'

import { EmitEventOperationOptions } from './emitEvent.options'
import { ToDeprecate } from '../../../../decorators/stability/toDeprecate.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.EMIT_EVENT)
@ToDeprecate()
export class EmitEventOperation extends Operation<OperationTypes.EMIT_EVENT> {
  public type = OperationTypes.EMIT_EVENT as const

  @Required()
  public options: EmitEventOperationOptions = new EmitEventOperationOptions()
}
