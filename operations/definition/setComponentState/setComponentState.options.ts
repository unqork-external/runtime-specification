import { Any, Default, Description } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

// TODO - what's the point of this one? If just setting lots of properties at once, we should normalize with SET_PROPERTY
export class SetComponentStateOperationOptions extends TargetedOperationOptions {
  @Any()
  @Description('The value refers to the intended value to mutate the intended targetKey to.')
  value: unknown

  @Default(false)
  @TrimmedDescription(`
    override refers to the type of behavior that SET_COMPONENT_STATE should emulate.
    If true, SET_COMPONENT_STATE  will check if the targetKey's value is set, if so, will overwrite the value of the targetKey in state components. Otherwise set the targetKey with value as a new field.
    If false, SET_COMPONENT_STATE will only update value of targetKey.
  `)
  override: boolean = false
}
