import { Any, Default, Description, Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OperationOptions } from '../../interface'

export class SetComponentStateOperationOptions extends OperationOptions {
  @Required()
  @Example('firstNameTextField')
  @Description('targetKey refers to the intended target to manipulate.')
  targetKey: string

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
