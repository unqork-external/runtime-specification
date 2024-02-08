import { Property } from '@tsed/schema'

import { ImageTargets } from './image.targets'

export class ImageStyling {
  @Property()
  targets: ImageTargets
}
