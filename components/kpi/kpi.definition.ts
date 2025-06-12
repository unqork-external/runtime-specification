import { Const, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { kpiData } from './kpi.data'
import { KpiStyling } from './kpi.styling'
import { KpiTargets } from './kpiTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Field } from '../../component-composition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('kpi')
@ViewTargets(KpiTargets)
export class KpiComponentDefinition extends BaseComponentDefinition {
  @Const('kpi')
  type: 'kpi' = 'kpi' as const

  @Optional()
  field: Field = new Field()

  @Required()
  data: kpiData = new kpiData()

  @Optional()
  declare styling?: KpiStyling

  @Optional()
  declare signals?: SignalTargets<KpiTargets>
}
