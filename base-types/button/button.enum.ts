/**
 * Why is this growing? This strategy should be completely removed.
 */
export enum ButtonActionTypes {
  EVENT = 'event',
  SAVE = 'save',
  SAVE_DRAFT = 'draft',
  RESET = 'reset',
  VALIDATE = 'validate',
  SUBMIT = 'submit',
  NO_OP = 'default',
  NEXT = 'next',
  PREVIOUS = 'previous',
  GO_TO = 'goto',
}

export enum ButtonSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
  LINK = 'link',
}

export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
}
