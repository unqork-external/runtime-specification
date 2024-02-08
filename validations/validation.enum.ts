// NOTE: Keeping values camel case to make working with utils imported from R1 easier
export enum ValidationRuleTypes {
  REQUIRED = 'required',
  MAX_LENGTH = 'maxLength',
  MIN_LENGTH = 'minLength',
  ARRAY_MIN_LENGTH = 'arrayMinLength',
  ARRAY_MAX_LENGTH = 'arrayMaxLength',
  PATTERN = 'pattern',
  MIN = 'min',
  MAX = 'max',
  MASK = 'mask',
  NUMBER = 'number',
  // dateinput is intentionally all lower case
  DATE_INPUT = 'dateinput',
  IS_BEFORE_DATE = 'isBeforeDate',
  IS_AFTER_DATE = 'isAfterDate',
  CUSTOM_ERROR = 'customError',
  IS_VALID_EMAIL = 'isEmail',
}
