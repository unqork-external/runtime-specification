import { Default, Enum, Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { InputField } from '../input/component.input'

export enum DecimalCharacterType {
  LOCALE = 'locale',
  COMMA = ',',
  PERIOD = '.',
}

export class NumberFieldSettings extends InputField {
  @Default('USD')
  @TrimmedDescription(`
    3-Letter ISO 4217 code for describing the currency type associated with the component. 
    It has no effect when formatAsCurrency is \`false\`
  `)
  @Example('USD', 'EUR', 'TRY')
  currencyCode: string = 'USD'

  @Default(DecimalCharacterType.LOCALE)
  @Enum(DecimalCharacterType)
  @TrimmedDescription(`
    Sets the character that will appear to denote decimals. 
    By default it uses the current locale to define what separator it needs to use. 
    Note the decimal character cannot be same as the locale's thousand separator 
    when the showThousandsSeparator flag is \`true\`, in such cases, the decimal separator will fallback to locale.
  `)
  @Example('locale -> 1000.00 (for en-US) 1000,00 (for pt-BR)', 'comma (,) -> 1000,00', 'period (.) -> 1000.00')
  decimalCharacter: DecimalCharacterType = DecimalCharacterType.LOCALE

  @Default(false)
  @TrimmedDescription(`
    When \`true\`, it will always display the number as an integer. 
    Calculations can still include decimals. 
    If this flag is \`true\` and the default value includes decimals, the number with decimal places
    will be the initial value in the submission data, but any interaction with the field will
    cause that value to be converted to integer.
  `)
  displayAsInteger: boolean = false

  @Default(16)
  @TrimmedDescription(`
    Sets the number of decimal places the user can input in the field.
    Trying to initialize the component passing a value with more decimal places
    than this limit will trigger a validation error. 
    If the default value is set and exceeds this decimal limit, the number will be 
    visually trimmed (not rounded) but will be initially present in the submission data with all decimal places.
    Interacting with the field causes the submission data to be updated with the trimmed value.
  `)
  @Example('2 -> 20.50', '6 -> 20.123456')
  decimalLimit: number = 16

  @TrimmedDescription(`
    Minimum number of decimal places.
    It will be effective if formatAsCurrency is true.
  `)
  @Default(2)
  minDecimalLimit: number = 2
}
