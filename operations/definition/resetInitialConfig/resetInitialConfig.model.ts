import { DiscriminatorValue, Required } from '@tsed/schema'

import { ResetInitialConfigOperationOptions } from './resetInitialConfig.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Reset Initial Config')
@DiscriminatorValue(OperationTypes.RESET_INITIAL_CONFIG)
@Alpha()
@AutogenDisabled()
export class ResetInitialConfigOperation extends Operation<OperationTypes.RESET_INITIAL_CONFIG> {
  @Required()
  public type = OperationTypes.RESET_INITIAL_CONFIG as const

  @Required()
  public options: ResetInitialConfigOperationOptions = new ResetInitialConfigOperationOptions()
}
