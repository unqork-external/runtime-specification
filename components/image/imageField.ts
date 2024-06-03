import { Description, Optional } from '@tsed/schema'

import { ImageSize } from './imageSize'
import { trimAll } from '../../../utilities'

@Description('Image field settings')
export class ImageField {
  @Description('Alternative Text represents the visual description of the image in text for assistive technologies.')
  @Optional()
  alternativeText?: string

  @Optional()
  size: ImageSize = new ImageSize()

  @Optional()
  @Description('Source URL represents the URL of the image.')
  sourceUrl?: string

  @Description(
    trimAll(
      `Adds a custom CSS class to the component. 
       This is useful for targeting this component to apply custom styles.`,
    ),
  )
  @Optional()
  customClass?: string
}
