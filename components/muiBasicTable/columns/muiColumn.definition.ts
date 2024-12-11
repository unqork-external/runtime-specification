import { Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { MuiColumnSizingDefinition } from './sizing/muiColumnSizing.definition'

@DiscriminatorValue('muiColumn')
export class MuiColumnDefinition {
  @Optional()
  @Description(`Column label`)
  label?: string

  @Optional()
  @Description(`Configurations to control column sizing`)
  columnSizing?: MuiColumnSizingDefinition

  @Property()
  @Description('filter type of the column')
  filterType?: string

  @Optional()
  @Description(
    'The minimum value that the number range filter can accept. This is an inclusive, meaning rows with this value will be included.',
  )
  min?: number

  @Optional()
  @Description(
    'The maximum value that the number range filter can accept. This is an inclusive, meaning rows with this value will be included.',
  )
  max?: number

  @Optional()
  @Description(
    'The interval between acceptable values in number range filter. Cannot exceed the max value for the range or be 0.',
  )
  step?: number

  @Optional()
  @Description('The date format shown in the date range filter UI.')
  dateFormat?: string
}
