import { Description, Optional } from '@tsed/schema'

@Description(' Size represents the size of the rendered image in pixels or points.')
export class ImageSize {
  @Optional()
  @Description('Width of the image')
  width?: number

  @Optional()
  @Description('Height of the image')
  height?: number
}
