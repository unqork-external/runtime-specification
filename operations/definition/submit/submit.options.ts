import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class SubmitOptions extends OperationOptions {
  @Required()
  @Description('Key of a target entity')
  @Example('submissionData')
  declare targetEntityKey: string
}
