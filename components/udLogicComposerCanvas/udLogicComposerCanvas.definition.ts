import { Const, DiscriminatorValue, Optional, Description } from '@tsed/schema'

import { UdLogicComposerCanvasStyling } from './udLogicComposerCanvas.styling'
import { UdLogicComposerCanvasTargets } from './udLogicComposerCanvasTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('udLogicComposerCanvas')
@ViewTargets(UdLogicComposerCanvasTargets)
export class UdLogicComposerCanvasComponentDefinition extends BaseComponentDefinition {
  @Const('udLogicComposerCanvas')
  type: 'udLogicComposerCanvas' = 'udLogicComposerCanvas' as const

  @Optional()
  declare styling?: UdLogicComposerCanvasStyling

  @Optional()
  declare signals?: SignalTargets<UdLogicComposerCanvasTargets>
}
