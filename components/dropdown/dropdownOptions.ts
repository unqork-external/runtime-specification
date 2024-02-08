import { Any, CollectionOf, Default, Description, Enum, Required } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { RefreshType } from '../../base-types'

export class DropdownOptionModel {
  @Required()
  @Description('Option key')
  key: string
  @Required()
  @Description('Option label')
  label: string
}

export class TransformOptions {
  @Required()
  @Default('key')
  @Description('Location of key.')
  keyLocation = 'key'

  @Required()
  @Default('label')
  @Description('Location of label.')
  labelLocation = 'label'
}

export class RefreshTargetModel {
  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string

  @Required()
  @Default(false)
  @Description('clear current value when refresh')
  clearOnRefresh: boolean = false

  @Required()
  @Enum(RefreshType)
  @Description('dropdown refresh type.')
  refreshType: RefreshType
}
export class DropdownOptions {
  @CollectionOf(DropdownOptionModel)
  @Description('Initial options for the dropdown.')
  initial?: DropdownOptionModel[]

  @Description('Data reference key Or Refresh onsettings for the dropdown.')
  refreshTarget?: RefreshTargetModel

  @Description('Label property for url reference source')
  labelProperty?: string

  @Description('Value property for url reference source')
  valueProperty?: string

  @Description(
    trimAll(`
      When you click on the dropdown, the values you see are represented by this key.
    `),
  )
  values?: DropdownOptionModel[]

  @Any()
  @Description(
    trimAll(`
    Values coming in to the dropdown to be rendered. 
    Should at least be an Object[] for the drop down to run through, and eventually map
    to the Dropdown Model represented by the \`values\` key
  `),
  )
  rawValues?: any
}
