import { Default, Description, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

class SearchSelectLabel {
  @Description('Label text.')
  text?: string

  @Description('Hide label of the component')
  hidden: boolean = false
}

export class SearchSelectField {
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
}
