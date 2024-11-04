import { Default, Description, Enum, Optional } from '@tsed/schema'

import { ChartAlignments } from './chart.alignments'
import { ChartVerticalAlignments } from './chart.verticalAlignments'

export class ChartLegend {
  @Optional()
  @Enum(ChartAlignments)
  @Default(ChartAlignments.CENTER)
  @Description('The horizontal alignment of the legend box within the chart area.')
  alignment: ChartAlignments = ChartAlignments.CENTER

  @Default(false)
  @Description('Whether to hide the chart legend.')
  hidden: boolean = false

  @Optional()
  @Enum(ChartVerticalAlignments)
  @Default(ChartVerticalAlignments.BOTTOM)
  @Description('The vertical alignment of the legend box.')
  verticalAlignment: ChartVerticalAlignments = ChartVerticalAlignments.BOTTOM
}
