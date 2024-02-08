import { Description, Example, Required } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface/operations.interface'

export class SubmitOptions extends BaseOperationOptions {
  @Required()
  @Description('Key of a target entity')
  @Example('submissionData')
  declare targetEntityKey: string
}
