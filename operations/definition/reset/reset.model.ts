import { DiscriminatorValue, Required } from '@tsed/schema'

import { ResetOperationOptions } from './reset.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Reset')
@DiscriminatorValue(OperationTypes.RESET)
@Alpha()
@AutogenDisabled()
export class ResetOperation extends Operation<OperationTypes.RESET> {
  public type = OperationTypes.RESET as const

  @Required()
  public options: ResetOperationOptions = new ResetOperationOptions()
}
