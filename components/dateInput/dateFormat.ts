import { Default, Description, Optional, Pattern } from '@tsed/schema'

import { dateFormatExamples } from './dateFormat.examples'
import { DateInputDefaults } from './dateInputDefaults.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'

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
  @Default(DateInputDefaults.DEFAULT_DATE_FORMAT)
  @Description(`Defines the format for the value of this field by using MDY tokens (tokens are case sensitive).
                m = month, d = day, y = year with two digits, Y = year with four digits.`)
  @Examples(dateFormatExamples)
  // The following regex matches each of (Y or y), m, and d only once.
  // Once we implement schema validation, this will help us enforce it
  @Pattern('^(?=[^Yy]*[Yy])(?=[^m]*m)(?=[^d]*d)[Yymd]{3}$')
  dateFormat: string = DateInputDefaults.DEFAULT_DATE_FORMAT
}
