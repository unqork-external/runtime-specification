import { Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { NumberAdornments } from './adornments/adornments'
import { NumberNestables } from './nesting/numberNestables'
import { NumberField } from './numberField'
import { NumberFormat } from './numberFormat'
import { NumberOptions } from './numberOptions'
import { NumberSimpleViewModel } from './numberSimpleViewModel'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('number')
@Description(
  trimAll(`
    The Number component is part of the core set of input components.
    It is useful to collect number values such as integers, decimals, or percentages.
    Unlike Text Field components, it only accepts numbers into the field.
    This component can also be configured to format values for a specific currency.
    Note Number values can be negative by default.
    It offers three interaction types:
    - Field: Displays an input field.
    - Range Slider: Displays a horizontal slider instead of a field.
    - Stepper: Displays the number as inline text along with +/- buttons.
    Each interaction type has its own configurations, see them for more information.
  `),
)
export class NumberComponentDefinition extends BaseComponentDefinition {
  @Const('number')
  @Description('Describes the component type')
  type: string = 'number' as const

  @Property()
  @Default(false)
  useSimpleView?: boolean = false

  @Property()
  simpleView?: NumberSimpleViewModel

  @Property(Display)
  @Description('Display settings for the number component.')
  display: Display = new Display()

  @Property(NumberField)
  @Description('Field settings for the number component.')
  field: NumberField = new NumberField()

  @Property(NumberFormat)
  @Description('Formatting settings for the number component.')
  format: NumberFormat = new NumberFormat()

  @Description(
    trimAll(`
      The initial value for the component configured in the designer.
      - For interaction type FIELD: it is the value that will initially appear inside the text box;
      - For interaction type RANGE: it is the middle point and the initial value of the slider;
      - For interaction type STEPPER: it is the initial value that will appear between the stepper buttons;
    `),
  )
  defaultValue?: number

  @Description(
    trimAll(`
      Options to configure the different interaction types of the number component.
      Each type offers a different set of options. Setting an option not available 
      to a specific type will not have any effect. 
      For example, setting the (Step Size) on a (Field) interaction type will do nothing.
    `),
  )
  options: NumberOptions = new NumberOptions()

  @Description('Value of the number component. It will be undefined if not set.')
  declare value?: number

  @Property()
  adornments?: NumberAdornments = new NumberAdornments()

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the left slot.
      Maintained by nestable api.
    `),
  )
  left?: string[] = []

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the right slot.
      Maintained by nestable api.
    `),
  )
  right?: string[] = []

  @Description(
    trimAll(`
      Nestable definitions for adorned number component.
      Simple Views 
    `),
  )
  nestables?: NumberNestables = new NumberNestables()
}
