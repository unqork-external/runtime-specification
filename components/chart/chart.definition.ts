import { CollectionOf, Const, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { ChartField } from './chart.field'
import { ChartSeries } from './chart.series'
import { ChartStyling } from './chart.styling'
import { ChartTargets } from './chart.targets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('vgChart')
@ViewTargets(ChartTargets)
export class ChartComponentDefinition extends BaseComponentDefinition {
  @Const('vgChart')
  type: 'vgChart' = 'vgChart' as const

  @Required()
  @CollectionOf(ChartSeries)
  series: ChartSeries[]

  @Required()
  @Property(Display)
  display = new Display()

  @Required()
  @Property(ChartField)
  field = new ChartField()

  @Optional()
  declare styling?: ChartStyling

  @Optional()
  declare signals?: SignalTargets<ChartTargets>
}
