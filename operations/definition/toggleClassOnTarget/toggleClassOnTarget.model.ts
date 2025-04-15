import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleClassOnTargetOperationOptions } from './toggleClassOnTarget.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Toggle Class On Target')
@DiscriminatorValue(OperationTypes.TOGGLE_CLASS_ON_TARGET)
@Description('Adds or removes a classname from a target.')
@Alpha()
@AutogenDisabled()
export class ToggleClassOnTargetOperation extends Operation<OperationTypes.TOGGLE_CLASS_ON_TARGET> {
  public type = OperationTypes.TOGGLE_CLASS_ON_TARGET as const

  @Required()
  public options: ToggleClassOnTargetOperationOptions = new ToggleClassOnTargetOperationOptions()
}
