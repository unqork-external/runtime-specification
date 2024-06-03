import { Any, CollectionOf, Default, Description, Enum, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { RefreshType } from '../../base-types'

export class DropdownOptionModel {
  @Required()
  @Description('The key for an option.')
  key: string

  @Required()
  @Description('The label for an option.')
  label: string
}

export class TransformOptions {
  @Required()
  @Default('key')
  @Description('The attribute to use for the key.')
  keyLocation = 'key'

  @Required()
  @Default('label')
  @Description('The attribute to use for the label.')
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
  @Description('Whether the current value is cleared after refresh.')
  clearOnRefresh: boolean = false

  @Required()
  @Enum(RefreshType)
  @Description('The dropdown refresh type.')
  refreshType: RefreshType
}

export class DropdownOptions {
  @Description('Initial options for the dropdown.')
  @CollectionOf(DropdownOptionModel)
  initial?: DropdownOptionModel[]

  @Description('Data Reference Key or Refresh-on settings for the Dropdown.')
  refreshTarget?: RefreshTargetModel

  @Description('The data attribute to use for setting the Label property.')
  labelProperty?: string

  @Description('The data attribute to use for setting the Value property')
  valueProperty?: string

  @Description('When clicking on the dropdown the values seen are represented by this key')
  @CollectionOf(DropdownOptionModel)
  values?: DropdownOptionModel[]

  @Any()
  @TrimmedDescription(`
    Values coming in to the dropdown to be rendered. 
    Should at least be an Object[] for the drop down to run through, and eventually map
    to the Dropdown Model represented by the \`values\` key
  `)
  rawValues?: any
}
