import { CollectionOf, Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { MuiColumnSizingDefinition } from './sizing/muiColumnSizing.definition'
import { FilterOption } from '../filters/columnFilterType'

@DiscriminatorValue('muiColumn')
export class MuiColumnDefinition {
  @Optional()
  @Description(`Column label`)
  label?: string

  @Optional()
  @Description(`Configurations to control column sizing`)
  @Property(MuiColumnSizingDefinition)
  columnSizing?: Partial<MuiColumnSizingDefinition>

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

  @Default(true)
  @Description(
    'If enabled, the filter select options will be automatically generated from the unique list of values in the column.',
  )
  useFacetedOptions: boolean = true

  @Optional()
  @Description('The custom list of options for a multi-select or select filter type.')
  @CollectionOf(FilterOption)
  filterOptions?: FilterOption[]

  @Default(false)
  @Description('When enabled, blank values in table will always show when a filter is applied.')
  includeBlanksInFilter: boolean = false

  @Default(false)
  @Description(
    `Creates extra option in Select Type and Text Type Filters for blanks. For Selected Type, when selected, only blank rows are shown. If other filter values are selected (and not the blank one), then the blank rows don’t show. For Text Type, when typing '(blanks)', only blank rows are shown. If other filter values are selected (and not the blank one), then the blank rows don’t show.`,
  )
  allowFilterBlank: boolean = false
}
