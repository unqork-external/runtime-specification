import { Const, Default, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { CheckboxesField } from './checkboxes.field'
import { CheckboxesOptions } from './checkboxes.options'
import { CheckboxesStyling } from './checkboxes.styling'
import { CheckboxesTargets } from './checkboxesTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('checkboxes')
@ViewTargets(CheckboxesTargets)
export class CheckboxesComponentDefinition extends BaseComponentDefinition {
  @Const('checkboxes')
  type: 'checkboxes' = 'checkboxes' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: CheckboxesField = new CheckboxesField()

  @Optional()
  options: CheckboxesOptions = new CheckboxesOptions()

  @Optional()
  @Default([])
  @Description('Store values for selected checkboxes')
  value: string[] = []

  @Optional()
  declare styling?: CheckboxesStyling

  @Optional()
  declare signals?: SignalTargets<CheckboxesTargets>
}
