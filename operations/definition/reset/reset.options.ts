import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ResetOperationOptions extends OperationOptions {
  @Required()
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('targetKey refers to the intended target to reset.')
  targetKey: string
}
