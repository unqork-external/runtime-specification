import { Description, Required } from '@tsed/schema'

import { Unknown } from '../../../../decorators/schema'

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
  @Description('ID of the column to set filter type')
  id: string

  @Required()
  @Unknown()
  @Description('Type of filter for the column')
  type: unknown
}
