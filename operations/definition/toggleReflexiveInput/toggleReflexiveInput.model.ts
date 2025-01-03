import { DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleReflexiveInputOperationOptions } from './toggleReflexiveInput.options'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TOGGLE_REFLEXIVE_INPUT)
@TrimmedDescription(`
    This operation will toggle the reflexive input in configuration editor or in ops builder. 
    The reflexive input toggle is determined by whether the target component being watched matches the expected value.
`)
export class ToggleReflexiveInputOperation extends Operation<OperationTypes.TOGGLE_REFLEXIVE_INPUT> {
  @Required()
  public type = OperationTypes.TOGGLE_REFLEXIVE_INPUT as const

  @Required()
  public options: ToggleReflexiveInputOperationOptions = new ToggleReflexiveInputOperationOptions()
}