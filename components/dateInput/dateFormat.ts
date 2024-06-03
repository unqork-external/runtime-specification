import { Default, Description, Optional } from '@tsed/schema'

@Description('Controls format of dates and autocomplete functionality')
export class DateFormat {
  @Optional()
  @Default(false)
  @Description('When enabled, this component will not store the timestamp of the date.')
  storeDateOnly: boolean = false

  @Optional()
  @Default('/')
  @Description('Delimiter used for the date.')
  displayDelimiter: string = '/'

  @Optional()
  @Default(false)
  @Description('Disable Autocomplete for the DateInput component.')
  disableAutoComplete: boolean = false

  @Optional()
  @Default('mdY')
  @Description('Defines the format for the value of this field by using MDY tokens (tokens are case sensitive).')
  dateFormat: string = 'mdY'
}
