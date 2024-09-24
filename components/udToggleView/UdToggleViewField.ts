import { Description, Optional } from '@tsed/schema'

import { Field } from '../../component-composition'

export class UdToggleViewField extends Field {
  @Optional()
  @Description('Allows customization of the class HTML parameter for the root element of the component')
  customClass?: string
}
