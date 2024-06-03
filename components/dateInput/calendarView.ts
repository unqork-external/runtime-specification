import { Default, Description, Example, Optional } from '@tsed/schema'

@Description('Controls range of dates shown to users and allows users to disable date selection')
export class CalendarView {
  @Optional()
  @Default(10)
  @Example(3, 5, 10)
  @Description('Display (+/-) years from the current date.')
  yearOffset: number = 10

  @Optional()
  @Default(false)
  @Description('Disable ability for user to select date.')
  hidden: boolean = false
}
