import { Const, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { IFrameOptions } from './iFrameOptions'
import { IFrameStyling } from './styling/iFrame.styling'
import { IFrameTargets } from './targets/IFrameTargets.enum'
import { ViewTargets } from '../../../decorators'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('iframe')
@ViewTargets(IFrameTargets)
@TrimmedDescription(`
  The Vega iFrame component is a versatile tool within the User Interface category that allows
  for the embedding of external web content directly into your modules.
  This component is designed to display HTML content through an iframe,
  which can include anything from a webpage to interactive media or other online resources.
`)
export class IFrameComponentDefinition extends BaseComponentDefinition {
  @Const('iframe')
  type: 'iframe' = 'iframe' as const

  @Optional()
  display: Display = new Display()

  @Required()
  options: IFrameOptions

  @Optional()
  @Description(
    'A title that accurately conveys the contents of the iframe component. This is helpful for people navigating with assistive technology.',
  )
  title?: string

  @Optional()
  declare styling?: IFrameStyling

  @Optional()
  declare signals?: SignalTargets<IFrameTargets>
}
