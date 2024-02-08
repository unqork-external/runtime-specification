import { Default, Description } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export class DateFormat {
  @Default(false)
  @Description('When enabled, this component will not store the timestamp of the date.')
  storeDateOnly: boolean = false

  @Default('/')
  @Description('Delimiter used for the date.')
  displayDelimiter: string = '/'

  @Default(false)
  @Description('Disable Autocomplete for the dateinput component.')
  disableAutoComplete: boolean = false

  @Default('mdY')
  @Description(
    trimAll(`
    Define the format for the value of this field by using MDY tokens. 
    Tokens are case sensitive.
  `),
  )
  dateFormat: string = 'mdY'
}
