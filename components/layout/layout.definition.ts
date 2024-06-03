import { CollectionOf, Const, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { LayoutField } from './layout.field'
import { LayoutStyling } from './layout.styling'
import { LayoutNestable } from './layoutNestable'
import { LayoutOptions } from './layoutOptions'
import { LayoutTargets } from './layoutTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@Description('This component allows for aligning child components in a horizontal row or vertical column pattern.')
@DiscriminatorValue('layout')
@ViewTargets(LayoutTargets)
export class LayoutComponentDefinition extends BaseComponentDefinition {
  @Const('layout')
  type: 'layout' = 'layout' as const

  @Optional()
  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  display: Display = new Display()

  @Optional()
  field: LayoutField = new LayoutField()

  @Optional()
  nestables = new LayoutNestable()

  @Optional()
  options: LayoutOptions = new LayoutOptions()

  @Optional()
  declare signals?: SignalTargets<LayoutTargets>

  @Examples(targetedStylingExample)
  declare styling?: LayoutStyling
}
