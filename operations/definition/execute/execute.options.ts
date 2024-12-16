import { Default, Description, Example, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { DefaultSignalTargets } from '../../../signals/signal.enum'
import { OperationOptions } from '../../interface'

export class ExecuteOptions extends OperationOptions {
  @Required()
  @Description(`Represents the fully qualified key, or the relative path to an object within Vega`)
  @Example('textfield')
  declare targetKey: string

  @Optional()
  @Default(DefaultSignalTargets.root)
  @Description('The location to look for operations to execute')
  @Example('root', 'myCustomComponentTarget')
  signalTarget?: string = DefaultSignalTargets.root

  @Optional()
  @TrimmedDescription(`
    Tells the runtime to not block execution.
    Helpful if you know that the operations are not dependent one each other
  `)
  @Default(true)
  blockExecution?: boolean
}
