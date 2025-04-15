import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { FocusOperationOptions } from './focus.options'
import { Beta, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Focus')
@DiscriminatorValue(OperationTypes.FOCUS)
@Description("Applies the DOM 'focus' attribute to a target element.")
@Beta()
@AutogenDisabled()
export class FocusOperation extends Operation<OperationTypes.FOCUS> {
  public type = OperationTypes.FOCUS as const
  @Required()
  public options: FocusOperationOptions = new FocusOperationOptions()
}
