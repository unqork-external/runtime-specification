import { Description, Enum, Required } from '@tsed/schema'

import { CheckboxesOptionType } from './checkboxesOptionType.enum'

export class CheckboxesOptionModel {
  @Required()
  @Description('Option label')
  label: string

  @Required()
  @Enum(CheckboxesOptionType)
  @Description('Option Type')
  type: CheckboxesOptionType

  @Required()
  @Description('Option Value')
  value: string
}
