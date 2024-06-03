import { Description, Optional } from '@tsed/schema'

import { Field } from '../../component-composition/field/component.field.label'

export class HtmlElementField extends Field {
  @Description(
    'Adds a custom CSS class to the rendered HTML element inside the component wrapper. This is useful for targeting this component to apply custom styles.',
  )
  @Optional()
  tagCustomClass?: string

  @Description(
    'Adds a custom CSS class to the Component Wrapper. This is useful for targeting this component to apply custom styles.',
  )
  @Optional()
  wrapperCustomClass?: string
}
