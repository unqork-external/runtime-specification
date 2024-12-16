import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class NavigationOperationOptions extends OperationOptions {
  @Required()
  @Description('targetKey refers to the intended target to manipulate.')
  targetKey: string

  @Description('Value refers to what type of the action to do.')
  @Example('next', 'previous', 'draft', 'submit')
  value?: string
}
