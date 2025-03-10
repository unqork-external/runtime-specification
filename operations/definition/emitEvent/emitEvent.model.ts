import { DiscriminatorValue, Required } from '@tsed/schema'

import { EmitEventOperationOptions } from './emitEvent.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.EMIT_EVENT)
@Alpha()
export class EmitEventOperation extends Operation<OperationTypes.EMIT_EVENT> {
  public type = OperationTypes.EMIT_EVENT as const

  @Required()
  public options: EmitEventOperationOptions = new EmitEventOperationOptions()
}
