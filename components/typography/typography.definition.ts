import { Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { TypographyStyling } from './styling/typography.styling'
import { TypographyTargetsEnum } from './targets/typographyTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition/display/component.display'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('typography')
export class TypographyComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'typography' = 'typography' as const

  @Required()
  @Description('The text content that will be rendered.')
  content: string

  @Optional()
  @Property()
  @Description('Display settings for the Typography component.')
  display: Display = new Display()

  @Optional()
  @Property()
  @Default('div')
  @Description('The root HTML element that will wrap the content.')
  element: keyof HTMLElementTagNameMap = 'div'

  @Description('Object that maps customized CSS styling to specific targets on the Typography component.')
  @Examples(targetedStylingExample)
  declare styling: TypographyStyling

  @Optional()
  declare signals?: SignalTargets<TypographyTargetsEnum>
}
