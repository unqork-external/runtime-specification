import { Description, Example } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class NavigationOperationOptions extends TargetedOperationOptions {
  @Description('Value refers to what type of the action to do.')
  @Example('next', 'previous', 'draft', 'submit')
  value?: string
}
