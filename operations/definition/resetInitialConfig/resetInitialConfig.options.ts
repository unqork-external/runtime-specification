import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ResetInitialConfigOperationOptions extends OperationOptions {
  @Required()
  @Example('firstNameTextField', 'panel.*')
  @Description('targetKey refers to the intended target to reset to the initial config.')
  targetKey: string
}
