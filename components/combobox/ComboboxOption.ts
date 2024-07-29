import { Default, Description, Optional, Required } from '@tsed/schema'

export class ComboboxOption {
  @Required()
  @Description('Unique key for the option, which is set as the Combobox value when selected.')
  key: string

  @Optional()
  @Description('Internally used indicator that the option is the creatable option.')
  creatableOption?: boolean | undefined

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
  @Description('Key of the icon displayed before the option label, as defined in the `components` nestable.')
  iconKey?: string

  @Optional()
  @Description('Option label.')
  label?: string
}
