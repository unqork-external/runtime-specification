import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { SetStylingTargetOperationOptions } from './setStylingTarget.options'
import { trimAll } from '../../../../utilities'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_STYLING_TARGET)
@Description(
  trimAll(`
    This operation is used to set CSS properties or classnames to a single, specific target on a component.
    This operation will overwrite any previously set styling config for that specific target.
  `),
)
export class SetStylingTargetOperation extends Operation<OperationTypes.SET_STYLING_TARGET> {
  public type = OperationTypes.SET_STYLING_TARGET as const

  @Required()
  public options: SetStylingTargetOperationOptions = new SetStylingTargetOperationOptions()
}
