import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetStylingTargetOperationOptions } from './setStylingTarget.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Styling Target')
@DiscriminatorValue(OperationTypes.SET_STYLING_TARGET)
@TrimmedDescription(`
  Sets CSS properties or classnames for a specific property on the styles object for the target component.
`)
@Alpha()
@AutogenDisabled()
export class SetStylingTargetOperation extends Operation<OperationTypes.SET_STYLING_TARGET> {
  public type = OperationTypes.SET_STYLING_TARGET as const

  @Required()
  public options: SetStylingTargetOperationOptions = new SetStylingTargetOperationOptions()
}
