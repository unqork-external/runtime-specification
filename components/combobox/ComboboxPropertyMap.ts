import { Description, Optional, Required } from '@tsed/schema'

export class ComboboxPropertyMap {
  @Required()
  @Description('Object property where the option value is present. Must store a string.')
  key: string

  @Optional()
  @Description('Object property where the option description is present. Must store a string.')
  description?: string

  @Optional()
  @Description('Object property where the option disabled is present. Must store a boolean.')
  disabled?: string

  @Optional()
  @Description('Object property where the option group label is present. Must store a string.')
  groupLabel?: string

  @Optional()
  @Description('Object property where the option icon source is present. Must store a string.')
  iconSource?: string

  @Optional()
  @Description(
    "Object property where the option icon type is present. Must store a string with one of the values 'css', 'fontAwesome' or 'url'.",
  )
  iconType?: string

  @Optional()
  @Description('Object property where the option label is present. Must store a string.')
  label?: string
}
