import { DiscriminatorValue, Required } from '@tsed/schema'

import { EmitEventOperationOptions } from './emitEvent.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Emit Event')
@DiscriminatorValue(OperationTypes.EMIT_EVENT)
@Alpha()
@AutogenDisabled()
export class EmitEventOperation extends Operation<OperationTypes.EMIT_EVENT> {
  public type = OperationTypes.EMIT_EVENT as const

  @Required()
  public options: EmitEventOperationOptions = new EmitEventOperationOptions()
}
