import { Any, CollectionOf, Default, Description, Enum, Example, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { RefreshType } from '../../base-types'

export class UdMultiSelectOptionModel {
  @Required()
  @Description('Option label')
  label: string

  @Required()
  @Description('Option value')
  value: string

  @Required()
  @Description('Additional option data')
  data?: any

  @Optional()
  @Description('Option group')
  group?: string
}

export class GroupedUdMultiSelectOptionModel {
  @Required()
  @Description('Option label')
  label: string

  @Required()
  @Description('Option value')
  @CollectionOf(UdMultiSelectOptionModel)
  options: UdMultiSelectOptionModel[]
}

export class UdMultiRefreshTargetModel {
  @Default(false)
  @Description('Clear current value when refresh if it doesnt exist in the list.')
  clearOnRefresh?: boolean = false

  @Default(250)
  @Description('Amount of time (in milliseconds) to delay request after typing has finished. Minimum 250.')
  delay: number = 250

  @Required()
  @Enum(RefreshType)
  @Description('dropdown refresh type.')
  refreshType: RefreshType

  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string
}

export class UdMultiSelectOptions {
  @CollectionOf(UdMultiSelectOptionModel)
  @Description('Initial options for the multiselect.')
  initial?: UdMultiSelectOptionModel[]

  @Description('Property on which to group options.')
  @Default('group')
  groupByProperty?: string = 'group'

  @Description('Whether options should be organized into groups.')
  groupOptions?: boolean

  @Any()
  @TrimmedDescription(`
    Values coming in to the dropdown to be rendered. 
    Should at least be an Object[] for the drop down to run through, and eventually map
    to the Dropdown Model represented by the \`values\` key
  `)
  rawValues?: any

  @Description('Data reference key Or Refresh on settings for the dropdown.')
  refreshTarget?: UdMultiRefreshTargetModel

  @CollectionOf(UdMultiSelectOptionModel)
  @Default([])
  @Description('Selected options used by the react-select input field.')
  @Example('[{label: "a", value: "a"}, {label: "b", value: "b"}')
  reactSelectValues?: (UdMultiSelectOptionModel | GroupedUdMultiSelectOptionModel)[] = []

  @Default('none')
  @Description('Sort direction for select options.')
  sortDirection?: 'asc' | 'desc' | 'none' = 'none'

  @Description('Data properties on which to filter options.')
  filterBy?: string

  @Description('Value property for url reference source')
  valueProperty?: string

  @CollectionOf(UdMultiSelectOptionModel)
  @Default([])
  @Description('Values from the data source for multi select')
  @Example('[{label: "something", value: "something"}]')
  values: UdMultiSelectOptionModel[] | GroupedUdMultiSelectOptionModel[] = []
}
