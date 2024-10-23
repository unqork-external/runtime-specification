import { Description, Example, Required } from '@tsed/schema'

import { OpsBuilderTargets } from '../../../components/operationsBuilder/targets/operationsBuilderTargets.enum'
import { type SignalTargets } from '../../../signals'

export class OpsBuilderHydrateOperationOptions {
  @Required()
  @Example('opsBuilder')
  @Description('key of the Ops Builder component to hydrate')
  targetKey: string

  @Description('an object of root signals that resolves to an object to hydrate the ops builder component')
  declare value: SignalTargets<OpsBuilderTargets>
}
