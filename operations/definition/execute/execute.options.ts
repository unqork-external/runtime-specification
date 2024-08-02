import { Default, Description, Example, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { DefaultSignalTargets } from '../../../signals/signal.enum'
import { TargetedOperationOptions } from '../../interface'

export class ExecuteOptions extends TargetedOperationOptions {
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
