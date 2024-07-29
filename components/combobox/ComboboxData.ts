import { Description, Optional, Required } from '@tsed/schema'

import { ComboboxOption } from './ComboboxOption'
import { ComboboxRefreshTarget } from './ComboboxRefreshTarget'

export class ComboboxData {
  @Required()
  @Description('Property ID of the referenced component.')
  options: ComboboxOption[]

  @Optional()
  @Description(
    'Property map indicating which properties in the data reference component value array map to in a Combobox option.',
  )
  refreshTarget?: ComboboxRefreshTarget
}
