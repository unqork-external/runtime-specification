import { Required, DiscriminatorValue, Optional, Enum, Description, Property, Default } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'

export class LinkTextBasicField extends Field {
  @Description('Allows customization of the class HTML parameter for the root element of the component')
  customClass?: string
}

export enum TextLinkTarget {
  /* Open in same tab */
  SELF = '_self',
  /* Open In new tab */
  BLANK = '_blank',
  /* Opens in the top window */
  TOP = '_top',
  /* Opens in parent frame */
  PARENT = '_parent',
}
export class TextLinkToDefinition {
  @Required()
  href: string

  @Optional()
  @Enum(TextLinkTarget)
  @Default(TextLinkTarget.SELF)
  target?: TextLinkTarget
}
@DiscriminatorValue('textLink')
export class TextLinkComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'textLink' = 'textLink' as const

  @Description('Content represents the content that should be rendered as the link.')
  content: string

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Required()
  @Description('Style represent the intended display style for the link.')
  to: TextLinkToDefinition

  @Property(LinkTextBasicField)
  @Description('Field settings')
  field: LinkTextBasicField = new LinkTextBasicField()
}
