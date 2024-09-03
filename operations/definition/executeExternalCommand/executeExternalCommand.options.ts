import { Enum, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators'

export class ExecuteExternalCommandOperationOptions {
  @Required()
  @TrimmedDescription(`
    Name of the command to run, will be passed directly to external application.
  `)
  // This Enum isn't actually a limit for the operation, but we need to include
  // it in the spec since Ops Builder should show a dropdown for this option
  // rather than a freeform text input
  @Enum('trigger', 'value')
  command: string

  @Optional()
  @TrimmedDescription(`
    External target for this command
  `)
  // Deliberately not `targetKey` because it refers to an external target
  // rather than an internal target within the runtime
  target?: string

  @Optional()
  @TrimmedDescription(`
    Parameters to pass through to parent command, can be any data type
  `)
  data?: unknown
}
