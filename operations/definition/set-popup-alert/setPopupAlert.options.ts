import { Default, Description, Required } from '@tsed/schema'
import { SweetAlertCustomClass } from 'sweetalert2'

// TODO:
//  Add the other options in relation to Swal, but not literally matching it
//  so we can curate our own Alert Schema.
type iconTypes = 'warning' | 'error' | 'success' | 'info' | 'question'

export class PopUpAlertOptions {
  @Description('Apply default styling to buttons. If you want to use your own classes, set this parameter to false')
  buttonsStyling?: boolean

  @Default('Cancel')
  @Description('Use this to change the text on the "Cancel" button.')
  cancelButtonText?: string = 'Cancel'

  @Default('OK')
  @Description('Use this to change the text on the "Confirm" button.')
  confirmButtonText?: string = 'OK'

  @Description('Use this to change the color on the "Confirm" button.')
  confirmButtonColor?: string

  @Description('Used to add classes for components inside of the modal.')
  customClass?: SweetAlertCustomClass

  @Description('An icon for the modal. SweetAlert comes with 5 built-in icons that you can use')
  icon?: iconTypes

  @Description('If set to true, a "Cancel" button will be shown, which the user can click on to dismiss the modal.')
  showCancelButton?: boolean

  @Description('If set to true, a "Confirm" button will be shown, which the user can click on to dismiss the modal.')
  showConfirmButton?: boolean

  @Description('A description for the popup.')
  text?: string

  @Description('The title of the popup, as HTML.')
  title?: string

  @Description('Toggle the ability to close popup with a click outside of the popup modal')
  allowOutsideClick?: boolean

  @Description('Amount of time before the popup modal automatically closes')
  timer?: number

  @Description('Total errors from our validation system')
  validationErrorCount?: number

  @Description('Errors we recieve if the api call fails')
  apiCallErrors?: any

  @Default(false)
  @Description('Should autoclose the popup without user interaction')
  shouldAutoClose?: boolean = false
}
export class SetPopupAlertOptions {
  @Required()
  public value: PopUpAlertOptions = new PopUpAlertOptions()
}
