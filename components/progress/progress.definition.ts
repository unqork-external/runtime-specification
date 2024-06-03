import { Required, DiscriminatorValue, Enum, Default, Description, Property, Optional } from '@tsed/schema'

import { ProgressField } from './progressField'
import { ProgressTargets } from './progressTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'

export enum ProgressTypes {
  PROGRESS = 'progress',
  METER = 'meter',
}

@DiscriminatorValue('progress')
@ViewTargets(ProgressTargets)
export class ProgressComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'progress' = 'progress' as const

  @Required()
  @Enum(ProgressTypes)
  @Default(ProgressTypes.PROGRESS)
  @Description('The type of progress component. Can be set to "progress" or "meter".')
  progressType: ProgressTypes = ProgressTypes.PROGRESS

  @Required()
  @Default(0)
  @Description('The current numerical value of progress.')
  declare value: number

  @Property(ProgressField)
  field: ProgressField = new ProgressField()

  @Property(Display)
  display: Display = new Display()

  @Optional()
  declare signals?: SignalTargets<ProgressTargets>
}
