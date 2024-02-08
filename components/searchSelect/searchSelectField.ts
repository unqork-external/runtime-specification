import { Default, Description, Property } from '@tsed/schema'

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
  @Description('IF false,  option list will be rendered in a Portal and appended to the bottom of the DOM')
  disablePortal: boolean = false
}
