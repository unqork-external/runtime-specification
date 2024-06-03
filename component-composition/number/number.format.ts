import { Default, Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { InputFormat } from '../input/component.input'

export class NumberFormat extends InputFormat {
  @Default(false)
  @TrimmedDescription(`
    When \`true\`, formats the number as a currency.
    Currency symbol position (prefix and/or suffix) and thousand/decimal separators 
    (regardless of the showThousandsSeparator flag) are automatically set.
    Toggling this option \`true\` overrides any prefix/suffix defined on the component, in other words,
    even if the currency symbol only appears as a prefix, any defined suffix will not show.
    Note a currency code is different of a currency symbol (e.g. USD -> $) and this mapping is also done
    automatically. This currency formatting is purely visual and will not be part of the submission data.
  `)
  @Example('1000 -> formatAsCurrency `true` + currencyCode (USD) -> $1,000')
  formatAsCurrency: boolean = false

  @Default(false)
  @TrimmedDescription(`
    When \`true\`, adds current locale's thousands separator to the number. 
    Note this setting is purely visual and does not affect how the number is stored in the submission data.
  `)
  @Example('10 -> 10', '1000 -> 1,000', '1000000 -> 1,000,000')
  showThousandsSeparator: boolean = false
}
