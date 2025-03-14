import { CollectionOf, Default, Description, Enum, Optional, Required } from '@tsed/schema'

import { ReflexiveDecorator } from '../../../../decorators/designer/Reflexive.decorator'

export enum ColumnFilterTypes {
  Checkbox = 'checkbox',
  Text = 'text',
  Select = 'select',
  MultiSelect = 'multi-select',
  NumberSlider = 'range-slider',
  NumberRange = 'range',
  DatePicker = 'date-range',
}

export class FilterOption {
  @Required()
  @Description('label of the option.')
  label: string

  @Required()
  @Description('value of the option.')
  value: string
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
  @ReflexiveDecorator({ path: 'type', value: ColumnFilterTypes.NumberSlider })
  min?: number

  @Optional()
  @Description(
    'The maximum value that the number range filter can accept. This is an inclusive, meaning rows with this value will be included.',
  )
  @ReflexiveDecorator({ path: 'type', value: ColumnFilterTypes.NumberSlider })
  max?: number

  @Optional()
  @Description(
    'The interval between acceptable values in number range filter. Cannot exceed the max value for the range or be 0.',
  )
  @ReflexiveDecorator({ path: 'type', value: ColumnFilterTypes.NumberSlider })
  step?: number

  @Optional()
  @Description('The date format shown in the date range filter UI.')
  @ReflexiveDecorator({ path: 'type', value: ColumnFilterTypes.DatePicker })
  dateFormat?: string

  @Default(true)
  @Description(
    'If enabled, the filter select options will be automatically generated from the unique list of values in the column.',
  )
  @ReflexiveDecorator({ path: 'type', value: [ColumnFilterTypes.MultiSelect, ColumnFilterTypes.Select] })
  useFacetedOptions: boolean = true

  @Optional()
  @Description('The custom list of options for a multi-select or select filter type.')
  @CollectionOf(FilterOption)
  @ReflexiveDecorator([
    { path: 'type', value: [ColumnFilterTypes.MultiSelect, ColumnFilterTypes.Select] },
    { path: 'useFacetedOptions', value: false },
  ])
  filterOptions: FilterOption[]

  @Default(false)
  @Description('When enabled, blank values in table will always show when a filter is applied.')
  includeBlanksInFilter: boolean = false

  @Default(false)
  @Description(
    `Creates extra option in Select Type and Text Type Filters for blanks. For Selected Type, when selected, only blank rows are shown. If other filter values are selected (and not the blank one), then the blank rows don’t show. For Text Type, when typing '(blanks)', only blank rows are shown. If other filter values are selected (and not the blank one), then the blank rows don’t show.`,
  )
  @ReflexiveDecorator({
    path: 'type',
    value: [ColumnFilterTypes.MultiSelect, ColumnFilterTypes.Select, ColumnFilterTypes.Text],
  })
  allowFilterBlank: boolean = false
}
