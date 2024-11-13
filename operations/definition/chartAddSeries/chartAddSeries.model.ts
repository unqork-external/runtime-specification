import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartAddSeriesOperationOptions } from './chartAddSeries.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Adds new series to a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_ADD_SERIES)
export class ChartAddSeriesOperation extends Operation<OperationTypes.CHART_ADD_SERIES> {
  @Required()
  public type = OperationTypes.CHART_ADD_SERIES as const

  @Required()
  public options: ChartAddSeriesOperationOptions = new ChartAddSeriesOperationOptions()
}
