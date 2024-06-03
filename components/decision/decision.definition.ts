import { Const, Default, DiscriminatorValue, Enum, Example, Optional } from '@tsed/schema'

import { DecisionTriggerTypes } from './DecisionTriggerTypes.enum'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Field } from '../../component-composition/field/component.field.label'

@DiscriminatorValue('decision')
@TrimmedDescription(`
  The Decisions component is an event component for logic-based if/then scenarios.
  For example, if your end-user selects radio button A, then show field B.
  Or, if your end-user types value X, then display pop-up Y.
`)
export class DecisionComponentDefinition extends BaseComponentDefinition {
  @Const('decision')
  type: 'decision' = 'decision' as const

  @Optional()
  field: Field = new Field()

  @Optional()
  @Default(DecisionTriggerTypes.MANUAL)
  @Enum(DecisionTriggerTypes)
  @Example(DecisionTriggerTypes.MANUAL, DecisionTriggerTypes.WATCH)
  triggerType: DecisionTriggerTypes = DecisionTriggerTypes.MANUAL
}
