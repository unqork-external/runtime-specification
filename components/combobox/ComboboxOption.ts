import { Default, Description, Hidden, Optional, Property, Required } from '@tsed/schema'

import { ComboboxIcon } from './ComboboxIcon'
import { ComboboxOptionTypes } from './ComboboxOptionTypes'

export class ComboboxOption {
  @Hidden()
  @Description('Internal option type.')
  @Default(ComboboxOptionTypes.option)
  type?: ComboboxOptionTypes = ComboboxOptionTypes.option

  @Required()
  @Description('Unique key for the option, which is set as the Combobox value when selected.')
  key: string

  @Optional()
  @Description('Option description displayed after the label.')
  description?: string

  @Optional()
  @Description("Whether the option is disabled and can't be selected.")
  @Default(false)
  disabled? = false

  @Optional()
  @Description('Option group label.')
  groupLabel?: string

  @Optional()
  @Property(ComboboxIcon)
  @Description('Icon displayed before the option label.')
  icon?: ComboboxIcon

  @Optional()
  @Description('Option label.')
  label?: string
}
