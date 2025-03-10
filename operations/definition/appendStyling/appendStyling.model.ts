import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { AppendStylingOperationOptions } from './appendStyling.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.APPEND_STYLING)
@Description(
  "This operation will append CSS objects and/or classes to a specific targets' existing styling configuration.",
)
@Alpha()
export class AppendStylingOperation extends Operation<OperationTypes.APPEND_STYLING> {
  public type = OperationTypes.APPEND_STYLING as const

  @Required()
  public options: AppendStylingOperationOptions = new AppendStylingOperationOptions()
}
