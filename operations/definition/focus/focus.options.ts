import { Description, Example, Required } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface'

export class FocusOperationOptions extends BaseOperationOptions {
  @Required()
  @Description('key of target')
  @Example('textfield')
  declare targetKey: string
}
