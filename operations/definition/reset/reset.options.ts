import { Description, Example, Required } from '@tsed/schema'

export class ResetOperationOptions {
  @Required()
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('targetKey refers to the intended target to reset.')
  targetKey: string
}
