import { DiscriminatorValue, Required } from '@tsed/schema'

import { ResetInitialConfigOperationOptions } from './resetInitialConfig.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.RESET_INITIAL_CONFIG)
@Alpha()
@AutogenDisabled()
export class ResetInitialConfigOperation extends Operation<OperationTypes.RESET_INITIAL_CONFIG> {
  @Required()
  public type = OperationTypes.RESET_INITIAL_CONFIG as const

  @Required()
  public options: ResetInitialConfigOperationOptions = new ResetInitialConfigOperationOptions()
}
