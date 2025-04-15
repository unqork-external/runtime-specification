import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { AppendStylingOperationOptions } from './appendStyling.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Append Styling')
@DiscriminatorValue(OperationTypes.APPEND_STYLING)
@Description("Appends CSS objects or classes to a target's existing styles.")
@Alpha()
@AutogenDisabled()
export class AppendStylingOperation extends Operation<OperationTypes.APPEND_STYLING> {
  public type = OperationTypes.APPEND_STYLING as const

  @Required()
  public options: AppendStylingOperationOptions = new AppendStylingOperationOptions()
}
