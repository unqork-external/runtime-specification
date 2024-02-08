import { Default, Description, Required } from '@tsed/schema'

import { InputField } from '../../componentComposition/input/component.input'

export class SimpleSelectRefreshTargetModel {
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
  @Default(false)
  @Description('Allows multiple values to be entered for this field.')
  multiple: boolean = false

  @Default(false)
  @Description('IF false, option list will be rendered in a Portal and appended to the bottom of the DOM')
  disablePortal: boolean = false

  @Description('Data reference key settings for the dropdown.')
  refreshTarget?: SimpleSelectRefreshTargetModel

  @Description('Label property for reference source')
  labelProperty?: string

  @Description('Key property for reference source')
  keyProperty?: string

  @Description('Adornments property for reference source')
  adornmentsProperty?: string
}
