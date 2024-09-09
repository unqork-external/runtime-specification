import { Description, Optional } from '@tsed/schema'

import { Field } from '../../component-composition'

export class UdViewBasicField extends Field {
  @Optional()
  @Description('Accessible label that describes the view for screen readers.')
  ariaLabel?: string

  @Optional()
  @Description('Accessible ARIA role for assistive technology tools based.')
  ariaRole?: string

  @Optional()
  @Description('Allows customization of the class HTML parameter for the root element of the component')
  customClass?: string
}
