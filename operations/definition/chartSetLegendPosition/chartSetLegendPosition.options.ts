import { Description, Enum, Optional, Required } from '@tsed/schema'

import { ChartAlignments, ChartVerticalAlignments } from '../../../components'

export class ChartSetLegendPositionOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string

  @Optional()
  @Enum(ChartAlignments)
  @Description("The horizontal alignment of the Legend relative to the Chart component's area.")
  alignment?: ChartAlignments

  @Optional()
  @Enum(ChartVerticalAlignments)
  @Description("The vertical alignment of the Legend relative to the Chart component's area.")
  verticalAlignment?: ChartVerticalAlignments
}
