import { Default, Description, Optional, Property, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

class SearchSelectLabel {
  @Description('Label text.')
  text?: string

  @Description('Hide label of the component')
  hidden: boolean = false
}

export class SearchSelectRefreshTargetModel {
  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string
}

export class SearchSelectField {
  @Optional()
  @Description('Adornments property for reference source')
  adornmentsProperty?: string

  @Property(SearchSelectLabel)
  @Description('Label related settings of the component')
  label: SearchSelectLabel = new SearchSelectLabel()

  @Description('Adds placeholder inside of input')
  placeholder?: string

  @Default(false)
  @Description('Allows multiple values to be entered for this field.')
  multiple: boolean = false

  @Default(false)
  @TrimmedDescription(`
    When "true", children stay within parent DOM hierarchy. 
    When "false", popup element is attached to HTML body as a React Portal
  `)
  disablePortal?: boolean = false

  @Optional()
  @Description('Data reference key settings for the dropdown.')
  refreshTarget?: SearchSelectRefreshTargetModel

  @Optional()
  @Description('Label property for reference source')
  labelProperty?: string

  @Optional()
  @Description('Key property for reference source')
  keyProperty?: string
}
