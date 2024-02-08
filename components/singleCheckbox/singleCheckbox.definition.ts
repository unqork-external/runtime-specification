import { Const, Default, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { SingleCheckboxAdornments } from './adornments/adornments'
import { SingleCheckboxField } from './singleCheckboxField'
import { SingleCheckboxStyling } from './styling/singleCheckbox.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { LeftAdornmentNestable, RightAdornmentNestable } from '../../componentComposition'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'

@DiscriminatorValue('checkbox')
export class SingleCheckboxComponentDefinition extends BaseComponentDefinition {
  @Const('checkbox')
  @Description('Type of the component.')
  type: 'checkbox' = 'checkbox' as const

  @Property()
  @Default(false)
  useSimpleView: boolean = false

  @Property(Display)
  display: Display = new Display()

  @Property(SingleCheckboxField)
  @Description('Field settings of the single checkbox.')
  field: SingleCheckboxField = new SingleCheckboxField()

  @Property(SingleCheckboxAdornments)
  adornments? = new SingleCheckboxAdornments()

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

  @Description('Nestable definitions for adorned single checkbox component.')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Description('Value of the single checkbox.')
  declare value?: boolean

  @Property()
  @Description('Object that maps customized CSS styling to specific targets on the Checkbox.')
  @Example(targetedStylingExample)
  declare styling: SingleCheckboxStyling
}
