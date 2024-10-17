import { Description, Example, Required } from '@tsed/schema'

export class ResetInitialConfigOperationOptions {
  @Required()
  @Example('firstNameTextField', 'panel.*')
  @Description('targetKey refers to the intended target to reset to the initial config.')
  targetKey: string
}
