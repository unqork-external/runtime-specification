import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartSetSeriesOperationOptions } from './chartSetSeries.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Updates series properties on a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_SET_SERIES)
export class ChartSetSeriesOperation extends Operation<OperationTypes.CHART_SET_SERIES> {
  @Required()
  public type = OperationTypes.CHART_SET_SERIES as const

  @Required()
  public options: ChartSetSeriesOperationOptions = new ChartSetSeriesOperationOptions()
}
