import { Default, Description, Optional, Required } from '@tsed/schema'

import { ComboboxPropertyMap } from './ComboboxPropertyMap'

export class ComboboxRefreshTarget {
  @Required()
  @Description('Property ID of the referenced component.')
  target: string

  @Optional()
  @Description('Property ID of the referenced component.')
  @Default('value')
  property = 'value'

  @Required()
  @Description(
    'Property map indicating which properties in the data reference component value array map to in a Combobox option.',
  )
  propertyMap: ComboboxPropertyMap
}
