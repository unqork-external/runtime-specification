import { Default, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

@TrimmedDescription(`
  Action Button Visibility settings relate to the availability of specific actions for a Canvas Item.
`)
export class ActionButtonVisibility {
  @Optional()
  @Default(true)
  @TrimmedDescription(`
    'openCsm' corresponds to the edit action button for the canvas item. When set to true, this component is considered editable, and a button will be rendered that when clicked, opens the Component Settings Modal. 
  `)
  openCsm: boolean = true

  @Optional()
  @Default(true)
  @TrimmedDescription(`
    'copy' corresponds to the copy action button for the canvas item. When true, the component config is able to be copied, and a button will be rendered that copies the component's config when clicked. 
  `)
  copy: boolean = true

  @Optional()
  @Default(true)
  @TrimmedDescription(`
    'paste' corresponds to the paste action button for the canvas item. When true, a button is rendered that when clicked, allows for the pasting of component configuration.
  `)
  paste: boolean = true

  @Optional()
  @Default(true)
  @TrimmedDescription(`
    'delete' corresponds to the delete action button for the canvas item. When true, a button is rendered that allows for deletion of the canvas item and it's specific component configuration. 
  `)
  delete: boolean = true
}
