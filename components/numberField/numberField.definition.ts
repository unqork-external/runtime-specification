import { Const, Default, Description, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display } from '../../componentComposition'
import { NumberAdornments } from '../number/adornments/adornments'
import { NumberNestables } from '../number/nesting/numberNestables'
import { NumberField } from '../number/numberField'
import { NumberFormat } from '../number/numberFormat'
import { NumberOptions } from '../number/numberOptions'
import { NumberSimpleViewModel } from '../number/numberSimpleViewModel'

export class NumberFieldComponentDefinition extends BaseComponentDefinition {
  @Const('numberField')
  @Description('Describes the component type')
  type: string = 'numberField' as const

  @Property()
  @Default(false)
  useSimpleView?: boolean = false

  @Property()
  simpleView?: NumberSimpleViewModel

  @Property(Display)
  @Description('Display settings for the numberField component.')
  display: Display = new Display()

  @Property(NumberField)
  @Description('Field settings for the numberField component.')
  field: NumberField = new NumberField()

  @Property(NumberFormat)
  @Description('Formatting settings for the numberField component.')
  format: NumberFormat = new NumberFormat()

  @Property(NumberFormat)
  @Description('Formatted value based on number field settings')
  formattedValue?: string

  @Description(
    trimAll(`
        The initial value for the component configured in the designer.
        - It is the value that will initially appear inside the text box;
      `),
  )
  defaultValue?: number

  @Description(
    trimAll(`
        Options to configure the different interaction types of the numberField component.
        Each type offers a different set of options. Setting an option not available 
        to a specific type will not have any effect. 
        For example, setting the (Step Size) on a (Field) interaction type will do nothing.
      `),
  )
  options: NumberOptions = new NumberOptions()

  @Description('Value of the numberField component. It will be undefined if not set.')
  declare value?: number

  @Property(NumberAdornments)
  adornments? = new NumberAdornments()

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
        Nestable definitions for adorned numberField component.
        Simple Views 
      `),
  )
  nestables?: NumberNestables = new NumberNestables()
}
