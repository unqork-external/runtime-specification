import { Required, DiscriminatorValue, Optional, Enum, Description, Property, Default } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
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

  @Description(
    trimAll(`
    Content represents the content that should be rendered as the link.
  `),
  )
  content: string

  @Required()
  @Description(
    trimAll(`
    Style represent the intended display style for the link.
  `),
  )
  to: UdLinkToDefinition | UdLinkToModuleDefinition

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()
}
