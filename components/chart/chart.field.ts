import { Description, Optional, Property, Required } from '@tsed/schema'

import { ChartAxis } from './chart.axis'
import { ChartLegend } from './chart.legend'
import { ChartText } from './chart.text'

export class ChartField {
  @Optional()
  @Description('Accessible label that describes the chart for screen readers.')
  ariaLabel?: string

  @Optional()
  @Property(ChartLegend)
  @Description('Legend configuration.')
  legend = new ChartLegend()

  @Property(ChartText)
  @Optional()
  @Description("The chart's subtitle.")
  subtitle?: ChartText

  @Property(ChartText)
  @Optional()
  @Description("The chart's main title.")
  title?: ChartText

  @Property(ChartAxis)
  @Required()
  @Description('Configuration for the X axis.')
  xAxis: ChartAxis

  @Property(ChartAxis)
  @Required()
  @Description('Configuration for the Y axis.')
  yAxis: ChartAxis
}
