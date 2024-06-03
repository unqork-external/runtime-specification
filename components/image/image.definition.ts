import { Const, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { ImageField } from './imageField'
import { ImageTargets } from './imageTargets.enum'
import { ImageStyling } from './styling/image.styling'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@Description(
  trimAll(`
        The Vega Image component is a component to display images in the module.
        Use this component by specifying the URL of external image files, or image files stored in Managed Assets
    `),
)
@DiscriminatorValue('image')
@ViewTargets(ImageTargets)
export class ImageComponentDefinition extends BaseComponentDefinition {
  @Const('image')
  type: 'image' = 'image' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: ImageField = new ImageField()

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: ImageStyling

  @Optional()
  declare signals?: SignalTargets<ImageTargets>
}
