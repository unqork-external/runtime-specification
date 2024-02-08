import { Required, DiscriminatorValue, Optional, Description, Property, Example, Default } from '@tsed/schema'

import { TypographyStyling } from './styling/typography.styling'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'

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
  @Example(targetedStylingExample)
  declare styling: TypographyStyling
}
