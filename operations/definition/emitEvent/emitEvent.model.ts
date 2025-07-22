import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { EmitEventOperationOptions } from './emitEvent.options'
import { Beta, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Emit Event')
@DiscriminatorValue(OperationTypes.EMIT_EVENT)
@Description(`
  Emits an event in the system.

  This Operation is only supported for use in Extension modules (modules tagged with "extension").
`)
@Beta()
@AutogenDisabled()
export class EmitEventOperation extends Operation<OperationTypes.EMIT_EVENT> {
  public type = OperationTypes.EMIT_EVENT as const

  @Required()
  public options: EmitEventOperationOptions = new EmitEventOperationOptions()
}
