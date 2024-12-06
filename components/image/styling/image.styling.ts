import { Description, Property } from '@tsed/schema'

import { ImageStyleTargets } from './image.targets'
import { StylingModel } from '../../../styling'

@Description('The possible targets for Textfield component styling.')
export class ImageStyling extends StylingModel<ImageStyleTargets> {
  @Property()
  declare targets: ImageStyleTargets
}
