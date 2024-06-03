import { Description, Optional } from '@tsed/schema'

@Description('Format options of the textfield.')
export class TimerFormat {
  @Optional()
  @Description('Format to display the time remaining.')
  timeFormat?: string
}
