import { Property, Description, Optional } from '@tsed/schema'

import { ButtonLabel } from './button.label'
import { Field } from '../../component-composition/field/component.field.label'

export class ButtonField extends Field {
  @Property(ButtonLabel)
  label: ButtonLabel = new ButtonLabel()

  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string

  @Optional()
  @Description('Adds a custom aria-label to the component.')
  ariaLabel?: string
}
