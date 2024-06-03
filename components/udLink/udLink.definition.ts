import { Default, Description, DiscriminatorValue, Enum, Optional, Property, Required } from '@tsed/schema'

import { UdLinkTargets } from './udLinkTargets.enum'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { UdViewBasicField } from '../udView'

export enum UdLinkTarget {
  SELF = 'self',
  BLANK = '_blank',
}

export class UdLinkToDefinition {
  @Required()
  href: string

  @Optional()
  @Enum(UdLinkTarget)
  @Default(UdLinkTarget.SELF)
  target?: UdLinkTarget
}

export class UdLinkToModuleDefinition extends UdLinkToDefinition {
  @Required()
  applicationId: string

  @Required()
  moduleId: string
}

@DiscriminatorValue('udLink')
export class UdLinkComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udLink' = 'udLink' as const

  @Description('Content represents the content that should be rendered as the link.')
  content: string

  @Required()
  @Description('Style represent the intended display style for the link.')
  to: UdLinkToDefinition | UdLinkToModuleDefinition

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Optional()
  declare signals?: SignalTargets<UdLinkTargets>
}
