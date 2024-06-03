import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { FocusOperationOptions } from './focus.options'
import { Beta } from '../../../../decorators/stability/beta.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.FOCUS)
@Description('Applies the DOM "focus" attribute to a specific target.')
@Beta()
export class FocusOperation extends Operation<OperationTypes.FOCUS> {
  public type = OperationTypes.FOCUS as const
  @Required()
  public options: FocusOperationOptions = new FocusOperationOptions()
}
