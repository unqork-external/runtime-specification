import { Description, Optional } from '@tsed/schema'

import { Field, InputLabel } from '../../component-composition'

export class LayoutField extends Field {
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  @Optional()
  customClass?: string

  @Optional()
  label: InputLabel = new InputLabel()
}
