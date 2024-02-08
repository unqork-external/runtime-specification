import { Default, Description, Enum } from '@tsed/schema'

export class CalendarView {
  @Default(10)
  @Description('Display (+/-) years from the current date.')
  yearOffset: number = 10

  @Default(false)
  @Description('Disable ability for user to select date.')
  hidden: boolean = false
}
