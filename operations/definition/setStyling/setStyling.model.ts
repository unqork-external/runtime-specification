import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { SetStylingOperationOptions } from './setStyling.options'
import { trimAll } from '../../../../utilities'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_STYLING)
@Description(
  trimAll(`
    This operation should be used to set an entire styling object on a component.
    This operation will override any pre-existing styling configuration in the component definition.
`),
)
export class SetStylingOperation extends Operation<OperationTypes.SET_STYLING> {
  public type = OperationTypes.SET_STYLING as const

  @Required()
  public options: SetStylingOperationOptions = new SetStylingOperationOptions()
}
