import { Required, DiscriminatorValue, Description, Optional, Deprecated, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { UdViewBasicField } from '../udView'

export class UdImageSize {
  @Required()
  width: number

  @Required()
  height: number
}

@DiscriminatorValue('udImage')
export class UdImageComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udImage' = 'udImage' as const

  @Required()
  @Description(
    trimAll(`
    AlternativeText represents the visual description of the image in text for assistive technologies.
  `),
  )
  alternativeText: string

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Required()
  @Description(
    trimAll(`
    Size represents the size of the rendered image in pixels or points.
  `),
  )
  size: UdImageSize

  @Required()
  @Description(
    trimAll(`
    SourceURL represents the URL of the image.
  `),
  )
  sourceUrl: string

  @Optional()
  @Description(
    trimAll(`
    SourceLocation represents the original location of the image, for internal reference.
  `),
  )
  sourceLocation: string

  @Optional()
  @Description(
    trimAll(`
    SourceId represents the ID of the image in the sourceLocation, for internal reference.
  `),
  )
  sourceId: string
}
