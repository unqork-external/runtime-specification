import { Description, Optional } from '@tsed/schema'

import { Field } from '../../component-composition/field/component.field.label'

export class Mapv2Field extends Field {
  @Optional()
  @Description('The dataReferenceKey component ID to use for the MapV2 address')
  referenceKey?: string

  @Optional()
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string
}
