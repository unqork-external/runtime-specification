import { Const, Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { OptionAdornments } from './OptionAdornments'
import { SimpleSelectOptionStyling } from './simpleSelectOption.styling'
import { SimpleSelectOptionTargets } from './simpleSelectOptionTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { StandardAdornmentsAsNestables } from '../../component-composition/adornments/component.adornments'
import { Display } from '../../component-composition/display/component.display'
import { Field } from '../../component-composition/field/component.field.label'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('simpleSelectOption')
@ViewTargets(SimpleSelectOptionTargets)
export class SimpleSelectOptionComponentDefinition extends BaseComponentDefinition {
  @Required()
  @Const('simpleSelectOption')
  type: 'simpleSelectOption' = 'simpleSelectOption' as const

  @Optional()
  adornments: OptionAdornments = new OptionAdornments()

  @Optional()
  field: Field = new Field()

  @Optional()
  display: Display = new Display()

  @Property()
  left: string[] = []

  @Property()
  right: string[] = []

  @Property()
  nestables: StandardAdornmentsAsNestables = new StandardAdornmentsAsNestables()

  @Optional()
  @Default(false)
  @Description('boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean = false

  @Optional()
  declare signals?: SignalTargets<SimpleSelectOptionTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: SimpleSelectOptionStyling

  @Required()
  @Description('Value of the component')
  declare value: string
}
