import { Description, Enum, Optional, Required } from '@tsed/schema'

export enum ColumnFilterTypes {
  Checkbox = 'checkbox',
  Text = 'text',
  Select = 'select',
  MultiSelect = 'multi-select',
  NumberSlider = 'range-slider',
  NumberRange = 'range',
  DatePicker = 'date-range',
}

export class ColumnFilterType {
  @Required()
  @Description('ID of the column to set filter type.')
  id: string

  @Required()
  @Enum(ColumnFilterTypes)
  @Description('Type of filter for the column.')
  type: string

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
