import { Description, Optional, Required } from '@tsed/schema'

import { ChartAxis } from './chart.axis'
import { ChartLegend } from './chart.legend'
import { ChartText } from './chart.text'

export class ChartField {
  @Optional()
  @Description('Accessible label that describes the chart for screen readers.')
  ariaLabel?: string

  @Optional()
  @Description('A detailed description of the chart that renders below the chart, and will be part of exported charts.')
  caption?: ChartText

  @Optional()
  @Description('Legend configuration.')
  legend = new ChartLegend()

  @Optional()
  @Description("The chart's subtitle.")
  subtitle?: ChartText

  @Optional()
  @Description("The chart's main title.")
  title?: ChartText

  @Required()
  @Description('Configuration for the X axis.')
  xAxis: ChartAxis

  @Required()
  @Description('Configuration for the Y axis.')
  yAxis: ChartAxis
}
