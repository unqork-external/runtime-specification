import { Optional } from '@tsed/schema'

export interface AlertResult {
  readonly isConfirmed: boolean
  readonly isDismissed: boolean
  readonly value?: any
}

export enum PopupAlertIcons {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  QUESTION = 'question',
}

export enum AlertStatus {
  SHOULD_OPEN = 'should open',
  SHOULD_CLOSE = 'should close',
}

export const POPUP_CUSTOM_CLASSES = {
  container: 'unq-swal--success',
  popup: 'unq-swal__popup',
  header: 'unq-swal__header',
  title: 'unq-swal__title',
  icon: 'unq-swal__icon',
  image: 'unq-swal__image',
  content: 'unq-swal__content',
  input: 'unq-swal__input',
  actions: 'unq-swal__actions',
  confirmButton: 'unq-button unq-swal__button--confirm',
  cancelButton: 'unq-button unq-swal__button--cancel',
  closeButton: 'unq-button unq-swal__button--close',
  footer: 'unq-swal__footer',
}

export class PopUpAlert {
  @Optional()
  status?: AlertStatus

  @Optional()
  result?: AlertResult

  @Optional()
  originatingContainerKey?: string

  @Optional()
  value?: any
}
