import { Description, Optional } from '@tsed/schema'

export class Mapv2Options {
  @Optional()
  @Description('Set to true to let end-users adjust the map view when clicking and dragging inside the map view port.')
  draggable?: boolean

  @Optional()
  @Description('Set to true to let end-users zoom in or out using')
  zoom?: boolean

  @Optional()
  @Description(
    'Set to true to insert a two-dimensional map and Satellite imagery buttons to the map view in Express View.',
  )
  satellite?: boolean

  @Optional()
  @Description(
    'Set to true to display a Full Screen button in the top-right corner of the map view in Express View. ' +
      'When end-users click the Full Screen button, the map expands to full-screen view.',
  )
  fullscreen?: boolean

  @Optional()
  @Description(
    'Set to true to insert the Google Street View icon into the bottom-right corner of the map view in Express View.' +
      ' End-Users can click and drag the Google Street View icon onto the map, placing them in the ground-level Street View.',
  )
  streetview?: boolean
}
