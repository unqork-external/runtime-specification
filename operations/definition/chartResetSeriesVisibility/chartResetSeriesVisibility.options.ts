import { Description, Required } from '@tsed/schema'

export class ChartResetSeriesVisibilityOperationOptions {
  @Required()
  @Description('The Property ID for the target Chart component.')
  targetKey: string
}
