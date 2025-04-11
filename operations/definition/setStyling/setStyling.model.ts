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
  This operation should be used to set an entire styling object on a component.
  This operation will override any pre-existing styling configuration in the component definition.
`)
@Alpha()
@AutogenDisabled()
export class SetStylingOperation extends Operation<OperationTypes.SET_STYLING> {
  public type = OperationTypes.SET_STYLING as const

  @Required()
  public options: SetStylingOperationOptions = new SetStylingOperationOptions()
}
