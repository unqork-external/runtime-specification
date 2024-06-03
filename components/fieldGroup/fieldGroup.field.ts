import { Description, Optional } from '@tsed/schema'

import { Field } from '../../component-composition'

export class FieldGroupSettings extends Field {
  @Optional()
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string
}
