import { Const, Default, Description, DiscriminatorValue, Example, Optional } from '@tsed/schema'

import { SingleCheckboxStyling } from './singleCheckbox.styling'
import { SingleCheckboxAdornments } from './singleCheckboxAdornments'
import { SingleCheckboxField } from './singleCheckboxField'
import { SingleCheckboxSimpleViewModel } from './singleCheckboxSimpleView.model'
import { SingleCheckboxTargets } from './singleCheckboxTargets'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../component-composition/adornments/component.adornments'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('checkbox')
@ViewTargets(SingleCheckboxTargets)
export class SingleCheckboxComponentDefinition extends BaseComponentDefinition {
  @Const('checkbox')
  type: 'checkbox' = 'checkbox' as const

  @Optional()
  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean = false

  @Optional()
  @Description('When useSimpleView is true, this object holds information about the current view')
  simpleView?: SingleCheckboxSimpleViewModel

  @Optional()
  display: Display = new Display()

  @Optional()
  field: SingleCheckboxField = new SingleCheckboxField()

  @Optional()
  adornments: SingleCheckboxAdornments = new SingleCheckboxAdornments()

  @Optional()
  @Default([])
  @TrimmedDescription(`
    Fully qualified child keys for adornments in the left slot.
    Maintained by nestable api.
  `)
  left: string[] = []

  @Optional()
  @Default([])
  @TrimmedDescription(`
    Fully qualified child keys for adornments in the right slot.
    Maintained by nestable api.
  `)
  right: string[] = []

  @Description('Nestable definitions for adorned single checkbox component.')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Optional()
  @Example(true, false)
  declare value?: boolean

  @Optional()
  declare signals?: SignalTargets<SingleCheckboxTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: SingleCheckboxStyling
}
