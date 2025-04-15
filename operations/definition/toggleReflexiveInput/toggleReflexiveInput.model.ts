import { DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleReflexiveInputOperationOptions } from './toggleReflexiveInput.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Toggle Reflexive Input')
@DiscriminatorValue(OperationTypes.TOGGLE_REFLEXIVE_INPUT)
@TrimmedDescription(`
  Toggles the reflexive input in configuration editor or in ops builder. 
  The reflexive input toggle is determined by whether the target component being watched matches the expected value.
`)
@Alpha()
@AutogenDisabled()
export class ToggleReflexiveInputOperation extends Operation<OperationTypes.TOGGLE_REFLEXIVE_INPUT> {
  @Required()
  public type = OperationTypes.TOGGLE_REFLEXIVE_INPUT as const

  @Required()
  public options: ToggleReflexiveInputOperationOptions = new ToggleReflexiveInputOperationOptions()
}
