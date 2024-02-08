import { DiscriminatorValue, Required } from '@tsed/schema'

import { EmitEventOperationOptions } from './emitEvent.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.EMIT_EVENT)
export class EmitEventOperation extends Operation<OperationTypes.EMIT_EVENT> {
  @Required()
  public options: EmitEventOperationOptions = new EmitEventOperationOptions()
}
