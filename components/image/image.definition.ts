import { Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { ImageStyling } from './styling/image.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { UdViewBasicField } from '../udView'

export class ImageSize {
  @Optional()
  width?: number

  @Optional()
  height?: number
}

@DiscriminatorValue('image')
export class ImageComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'image' = 'image' as const

  @Description(
    trimAll(`
    Alternative Text represents the visual description of the image in text for assistive technologies.
  `),
  )
  alternativeText?: string

  @Property(Display)
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Property(ImageSize)
  @Required()
  @Description(
    trimAll(`
    Size represents the size of the rendered image in pixels or points.
  `),
  )
  size: ImageSize = new ImageSize()

  @Required()
  @Description(
    trimAll(`
    Source URL represents the URL of the image.
  `),
  )
  sourceUrl: string

  @Property()
  styling: ImageStyling
}
