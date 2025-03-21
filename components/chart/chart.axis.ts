import { Description, Optional, Property } from '@tsed/schema'

import { ChartText } from './chart.text'

export class ChartAxis {
  @Optional()
  @Description('A soft maximum for the axis.')
  softMax?: number

  @Optional()
  @Description('A soft minimum for the axis.')
  softMin?: number

  @Optional()
  @Description("The chart's main title.")
  title?: ChartText

  @Optional()
  @Description('Description for the axis to expose to screen readers.')
  description?: ChartText
}
