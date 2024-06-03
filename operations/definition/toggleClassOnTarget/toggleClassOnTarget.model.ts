import { DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleClassOnTargetOperationOptions } from './toggleClassOnTarget.options'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TOGGLE_CLASS_ON_TARGET)
@TrimmedDescription(`
    This operation will add a classname to a target if it is not currently there,
    or remove a classname from a target if it already exists on it
  `)
export class ToggleClassOnTargetOperation extends Operation<OperationTypes.TOGGLE_CLASS_ON_TARGET> {
  public type = OperationTypes.TOGGLE_CLASS_ON_TARGET as const

  @Required()
  public options: ToggleClassOnTargetOperationOptions = new ToggleClassOnTargetOperationOptions()
}
