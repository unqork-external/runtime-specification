import { Const, DiscriminatorValue, Optional, Description } from '@tsed/schema'

import { UdEmbeddedQuillStyling } from './udEmbeddedQuill.styling'
import { UdEmbeddedQuillTargets } from './udEmbeddedQuillTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('udEmbeddedQuill')
@ViewTargets(UdEmbeddedQuillTargets)
export class UdEmbeddedQuillComponentDefinition extends BaseComponentDefinition {
  @Const('udEmbeddedQuill')
  type: 'udEmbeddedQuill' = 'udEmbeddedQuill' as const

  @Optional()
  @Description('Data from Quill')
  quillData?: Record<string, any> = {}

  @Optional()
  declare styling?: UdEmbeddedQuillStyling

  @Optional()
  declare signals?: SignalTargets<UdEmbeddedQuillTargets>
}
