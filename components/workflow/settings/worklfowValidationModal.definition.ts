import { Description } from '@tsed/schema'

export class WorkflowValidationModalSettings {
  @Description('The title for the error modal.')
  errorTitle: string = 'Oops - {{ errors }} error(s) have been found!'

  @Description('The body text for the error modal.')
  errorMessage: string = 'Please fix the fields outlines in red.'

  @Description('The confirmation button text for the error modal.')
  confirmationButtonText: string = 'OK'
}
