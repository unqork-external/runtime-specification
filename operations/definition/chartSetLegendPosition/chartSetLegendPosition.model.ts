import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartSetLegendPositionOperationOptions } from './chartSetLegendPosition.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Updates the legend position on a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_SET_LEGEND_POSITION)
export class ChartSetLegendPositionOperation extends Operation<OperationTypes.CHART_SET_LEGEND_POSITION> {
  @Required()
  public type = OperationTypes.CHART_SET_LEGEND_POSITION as const

  @Required()
  public options: ChartSetLegendPositionOperationOptions = new ChartSetLegendPositionOperationOptions()
}
