import { Default, Description, Example, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { DefaultSignalTargets } from '../../../signals/signal.enum'

export class ExecuteOptions {
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
  @Description('Tells the runtime to execute the operation if is true')
  @Default(true)
  shouldExecute?: boolean = true

  @Optional()
  @TrimmedDescription(`
    Tells the runtime to not block execution.
    Helpful if you know that the operations are not dependent one each other
  `)
  @Default(true)
  blockExecution?: boolean
}
