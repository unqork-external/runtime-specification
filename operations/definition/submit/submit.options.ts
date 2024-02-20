import { Description, Example, Required } from '@tsed/schema'

export class SubmitOptions {
  @Required()
  @Description('Key of a target entity')
  @Example('submissionData')
  declare targetEntityKey: string
}
