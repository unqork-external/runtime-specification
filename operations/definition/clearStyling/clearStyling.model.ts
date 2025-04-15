import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ClearStylingOperationOptions } from './clearStyling.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Clear Styling')
@DiscriminatorValue(OperationTypes.CLEAR_STYLING)
@Description("Clears styles added via 'styling' configuration.")
@Alpha()
@AutogenDisabled()
export class ClearStylingOperation extends Operation<OperationTypes.CLEAR_STYLING> {
  public type = OperationTypes.CLEAR_STYLING as const

  @Required()
  public options: ClearStylingOperationOptions = new ClearStylingOperationOptions()
}
