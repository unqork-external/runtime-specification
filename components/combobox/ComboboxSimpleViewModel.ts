import { Default, Description, Optional } from '@tsed/schema'

export class ComboboxSimpleViewModel {
  @Optional()
  @Description('Internal indicator for whether the simple view is in edit mode.')
  @Default(false)
  inEditMode: boolean = false
}
