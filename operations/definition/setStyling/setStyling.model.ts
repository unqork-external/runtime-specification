import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetStylingOperationOptions } from './setStyling.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Styling')
@DiscriminatorValue(OperationTypes.SET_STYLING)
@TrimmedDescription(`
  Sets the entire styling object on a target component, overriding existing styles.
`)
@Alpha()
@AutogenDisabled()
export class SetStylingOperation extends Operation<OperationTypes.SET_STYLING> {
  public type = OperationTypes.SET_STYLING as const

  @Required()
  public options: SetStylingOperationOptions = new SetStylingOperationOptions()
}
