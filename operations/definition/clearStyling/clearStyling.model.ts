import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ClearStylingOperationOptions } from './clearStyling.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CLEAR_STYLING)
@Description('This operation will clear any styles added to a component via `styling` configuration.')
@Alpha()
export class ClearStylingOperation extends Operation<OperationTypes.CLEAR_STYLING> {
  public type = OperationTypes.CLEAR_STYLING as const

  @Required()
  public options: ClearStylingOperationOptions = new ClearStylingOperationOptions()
}
