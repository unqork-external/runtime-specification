import { Required, DiscriminatorValue, Enum, Default, Description, Property } from '@tsed/schema'

import { ProgressField } from './progressField'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

export enum ProgressTypes {
  PROGRESS = 'progress',
  METER = 'meter',
}

@DiscriminatorValue('progress')
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
}
