import { Default, Description, Example, Optional, Required } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface/operations.interface'

export class ExecuteOptions extends BaseOperationOptions {
  @Required()
  @Description('key of target')
  @Example('textfield')
  declare targetKey: string

  @Optional()
  @Description('Tells the runtime to execute the operation if is true')
  @Default(true)
  shouldExecute?: boolean = true

  @Optional()
  @Description(`Tells the runtime to not block execution.
    Helpful if you know that the operations are not dependent one each other`)
  @Default(true)
  blockExecution?: boolean
}
