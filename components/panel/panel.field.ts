import { Description, Default, Optional } from '@tsed/schema'

import { InputLabel } from '../../component-composition'

export class PanelField {
  @Optional()
  @Description('Toggle on to display the panel as an accordion.')
  @Default(false)
  accordion?: boolean = false

  @Optional()
  @Description('Current open/closed state of the accordion.')
  @Default(false)
  accordionCollapsed?: boolean = false

  @Optional()
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string

  @Optional()
  label: InputLabel = new InputLabel()

  @Optional()
  @Description('Isolation validation of panel components from rest of module.')
  isolateValidation?: boolean

  @Optional()
  @Description('Class added to the modal window.')
  modalDialogClassName?: string

  @Optional()
  @Description('Event attached to the closing of a modal.')
  modalDismissEvent?: string

  @Optional()
  @Description('Event attached to the opening of a modal.')
  modalOpenEvent?: string

  @Optional()
  @Description('When enabled, this allows the user to dismiss the modal by clicking outside of it.')
  outsideDismiss?: boolean

  @Optional()
  @Description('Theme classes added to the panel content.')
  @Default('theme')
  theme: string = 'theme'

  @Optional()
  @Description('The component to trigger after the end-user manually closes the modal.')
  triggerOnDismissal?: string
}
