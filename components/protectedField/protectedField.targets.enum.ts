export enum ProtectedFieldTargets {
  root = 'root',
  label = 'label',
  tooltipButton = 'tooltipButton',
  tooltipPopover = 'tooltipPopover',
  input = 'input',
  errors = 'errors',
  inputPrefix = 'inputPrefix',
  inputSuffix = 'inputSuffix',
  inputWrapper = 'inputWrapper',
  readOnly = 'readOnly',
}

export const PROTECTED_FIELD_CLASS_PREFIX = 'VGProtectedField-'

export enum ProtectedFieldClasses {
  root = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.root}`,
  label = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.label}`,
  tooltipButton = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.tooltipButton}`,
  tooltipPopover = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.tooltipPopover}`,
  input = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.input}`,
  inputWrapper = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.inputWrapper}`,
  errors = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.errors}`,
  inputPrefix = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.inputPrefix}`,
  inputSuffix = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.inputSuffix}`,
  readOnly = `${PROTECTED_FIELD_CLASS_PREFIX}${ProtectedFieldTargets.readOnly}`,
}
