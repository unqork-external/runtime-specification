import { Default, Description, Integer, Optional } from '@tsed/schema'

@Description('Field settings of the timer.')
export class TimerOptions {
  @Optional()
  @Default(false)
  @Description('Controls if the timer should continue to count.')
  continueTimer?: boolean = false

  @Optional()
  @Default(false)
  @Description('Choose whether the timer should count up to the duration or count down from the duration.')
  countUp: boolean = false

  @Optional()
  @Integer()
  @Description('Set how long the timer should run (in seconds).')
  duration?: number

  @Optional()
  @Default(false)
  @Description('Keeps track of user interaction on screen and resets the timer if user activity is detected.')
  resetOnUserActivity?: boolean = false
}
