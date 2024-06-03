import { Description, Example, Optional } from '@tsed/schema'

export class ButtonDomEvents {
  @Optional()
  @Description('The date of last Button click.')
  @Example('2024-04-25T16:59:17.292Z')
  lastClicked?: Date
}
