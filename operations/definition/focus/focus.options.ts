import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class FocusOperationOptions extends OperationOptions {
  @Required()
  @Description('key of target')
  @Example('textfield')
  declare targetKey: string
}
