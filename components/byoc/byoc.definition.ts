import { Const, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { ByocStyling } from './byoc.styling'
import { ByocTargets } from './byocTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@Description('BYO Information for the custom component')
class ByoInformation {
  @Required()
  @Description('The component type from a BYO asset that should be rendered')
  componentType: string
}

@DiscriminatorValue('byoc')
@ViewTargets(ByocTargets)
export class ByocComponentDefinition extends BaseComponentDefinition {
  @Const('byoc')
  type: 'byoc' = 'byoc' as const

  @Required()
  byo: ByoInformation

  @Required()
  @Description('Settings defined for the BYO component in the manifest')
  settings: Record<string, unknown> = {}

  @Optional()
  declare styling?: ByocStyling

  @Optional()
  declare signals?: SignalTargets<ByocTargets>;

  // Unknown properties from the BYO component. This is needed to satisfy the TS checks
  [key: string]: unknown
}
