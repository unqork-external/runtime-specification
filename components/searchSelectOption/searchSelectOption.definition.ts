import { Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { OptionAdornments } from './OptionAdornments'
import { SearchSelectOptionStyling } from './searchSelectOption.styling'
import { SearchSelectOptionTargets } from './searchSelectOptionTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import {
  LeftAdornmentNestable,
  RightAdornmentNestable,
} from '../../component-composition/adornments/component.adornments'
import { Display } from '../../component-composition/display/component.display'
import { Field } from '../../component-composition/field/component.field.label'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('searchSelectOption')
@ViewTargets(SearchSelectOptionTargets)
export class SearchSelectOptionComponentDefinition extends BaseComponentDefinition {
  @Const('searchSelectOption')
  type: 'searchSelectOption' = 'searchSelectOption' as const

  @Optional()
  adornments: OptionAdornments = new OptionAdornments()

  @Optional()
  field: Field = new Field()

  @Optional()
  display: Display = new Display()

  @Optional()
  @Default([])
  @Description('Fully qualified child keys for left icon nestables. Maintained by nestable api.')
  left: string[] = []

  @Optional()
  @Default([])
  @Description('Fully qualified child keys for right icon nestables. Maintained by nestable api.')
  right: string[] = []

  @Description('Nestable definitions for the component')
  nestables = {
    left: new LeftAdornmentNestable(),
    right: new RightAdornmentNestable(),
  }

  @Required()
  declare value: string

  @Examples(targetedStylingExample)
  declare styling?: SearchSelectOptionStyling

  @Optional()
  declare signals?: SignalTargets<SearchSelectOptionTargets>
}
