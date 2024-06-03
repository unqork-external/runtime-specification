import { Default, Description, Optional, Required } from '@tsed/schema'

import { InputField } from '../../component-composition/input/component.input'

export class SimpleSelectRefreshTargetModel {
  @Optional()
  @Default(false)
  @Description('Clear current value when refresh if it doesnt exist in the list.')
  clearOnRefresh?: boolean = false

  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string
}
export class SimpleSelectField extends InputField {
  @Optional()
  @Default(false)
  @Description('Allows multiple values to be entered for this field.')
  multiple: boolean = false

  @Optional()
  @Description('Data reference key settings for the dropdown.')
  refreshTarget?: SimpleSelectRefreshTargetModel

  @Optional()
  @Description('Label property for reference source')
  labelProperty?: string

  @Optional()
  @Description('Key property for reference source')
  keyProperty?: string

  @Optional()
  @Description('Adornments property for reference source')
  adornmentsProperty?: string
}
