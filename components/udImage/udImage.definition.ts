import { Required, DiscriminatorValue, Description, Optional, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
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
  @Description('AlternativeText represents the visual description of the image in text for assistive technologies.')
  alternativeText: string

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Required()
  @Description('Size represents the size of the rendered image in pixels or points.')
  size: UdImageSize

  @Required()
  @Description('SourceURL represents the URL of the image.')
  sourceUrl: string

  @Optional()
  @Description('SourceLocation represents the original location of the image, for internal reference.')
  sourceLocation: string

  @Optional()
  @Description('SourceId represents the ID of the image in the sourceLocation, for internal reference.')
  sourceId: string
}
