import { Default, Description, Optional } from '@tsed/schema'

import { Field, InputHelperText, InputLabel } from '../../component-composition'

export class ComboboxField extends Field {
  @Optional()
  @Description('Displays a clear button at the leading of the component.')
  @Default(true)
  clearable? = true

  @Optional()
  @Description('Label for the clear button used by screen readers.')
  clearButtonLabel?: string

  @Optional()
  @Description('Label for the close popup indicator button used by screen readers.')
  closeButtonLabel?: string

  @Optional()
  @Description('Allows the user to store a custom value not present in the options.')
  @Default(false)
  creatable? = false

  @Optional()
  @Description('Label for the creatable option to be displayed. Replaces `{VALUE}` with the text entered by the user.')
  createOptionLabel?: string

  @Optional()
  @Description("Custom CSS class applied to the component's wrapper HTML element.")
  customClass?: string

  @Optional()
  @Description('Whether filtering is handled by external logic, disabling internal filtering.')
  @Default(false)
  externalFilter? = false

  @Optional()
  @Description('Whether options are grouped by their Group Label.')
  @Default(false)
  groupOptions? = false

  @Optional()
  @Description('Helper text displayed below the input control.')
  helperText: InputHelperText = new InputHelperText()

  @Optional()
  @Description('Label for the input control.')
  label: InputLabel = new InputLabel()

  @Optional()
  @Description('Label displayed in the options list when `display.loading` is `true` and there are no options.')
  loadingLabel?: string

  @Optional()
  @Description('Allows multiple options selection.')
  @Default(false)
  multiple? = false

  @Optional()
  @Description('Label displayed when there are no options. Replaces `{VALUE}` with the text entered by the user.')
  noOptionsLabel?: string

  @Optional()
  @Description('Label for the open popup indicator button used by screen readers.')
  openButtonLabel?: string

  @Optional()
  @Description('Text displayed as a placeholder label when there are no options selected.')
  placeholder?: string

  @Optional()
  @Description(
    'Whether the options popup should remain open after a selection is made. Useful when multiple selections are allowed.',
  )
  @Default(false)
  remainOpenAfterSelection? = false

  @Optional()
  @Description('Whether the selected options should be removed from the options list.')
  @Default(false)
  removeSelectedOptions? = false

  @Optional()
  @Description('Whether the leading icon on the component should be replaced by the icon of the selected option.')
  @Default(false)
  replaceIconWithSelectedOptionIcon? = false

  @Optional()
  @Description('Whether the selected option icon should appear outside of the options list.')
  @Default(false)
  showSelectedOptionIcon? = false

  @Optional()
  @Description("Text for the component's tooltip.")
  tooltipDescription?: string

  @Optional()
  @Description(
    'Whether to enable the typeahead behavior on the search text input as the user selects options with the keyboard.',
  )
  @Default(false)
  typeahead? = false
}
