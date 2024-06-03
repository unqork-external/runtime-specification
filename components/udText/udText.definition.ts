import { Default, Description, DiscriminatorValue, Enum, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { UdLinkTargets } from '../udLink/udLinkTargets.enum'
import { UdViewBasicField } from '../udView'

export enum UdTextAppearance {
  BLOCK = 'block',
  HEADING_1 = 'heading-1',
  HEADING_2 = 'heading-2',
  HEADING_3 = 'heading-3',
  HEADING_4 = 'heading-4',
  HEADING_5 = 'heading-5',
  HEADING_6 = 'heading-6',
  INLINE = 'inline',
  PARAGRAPH = 'paragraph',
}

@DiscriminatorValue('udText')
export class UdTextComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udText' = 'udText' as const

  @Enum(UdTextAppearance)
  @Default(UdTextAppearance.INLINE)
  @Description('Appearance represents the intended visual style and role for the text block.')
  appearance?: UdTextAppearance

  @Description('Content represents the content that should be rendered as text.')
  content?: string

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Optional()
  declare signals?: SignalTargets<UdLinkTargets>
}
