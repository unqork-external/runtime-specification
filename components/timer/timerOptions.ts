import { Default, Description, Integer } from '@tsed/schema'

export class TimerOptions {
  @Description('Controls if the timer should continue to count.')
  continueTimer?: boolean

  @Default(false)
  @Description('Choose whether the timer should count up to the duration or count down from the duration.')
  countUp: boolean = false

  @Integer()
  @Description('Set how long the timer should run (in seconds).')
  duration?: number

  @Default(false)
  @Description('Keeps track of user interaction on screen and resets the timer if user activity is detected.')
  resetOnUserActivity?: boolean = false
}
