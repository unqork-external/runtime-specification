import { Description, Required } from '@tsed/schema'

export class ComboboxSimpleViewModel {
  @Required()
  @Description('Internal indicator for whether the simple view is in edit mode.')
  inEditMode: boolean
}
