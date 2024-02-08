import { ValidationRuleTypes } from './validation.enum'

export type ValidationHandlerValidationsMap = {
  [ValidationRuleTypes.REQUIRED]: { required: boolean }
  [ValidationRuleTypes.PATTERN]: { pattern: RegExp }
  [ValidationRuleTypes.MAX_LENGTH]: { maxLength: number }
  [ValidationRuleTypes.MIN_LENGTH]: { minLength: number }
  [ValidationRuleTypes.ARRAY_MAX_LENGTH]: { arrayMaxLength: number }
  [ValidationRuleTypes.ARRAY_MIN_LENGTH]: { arrayMinLength: number }
  [ValidationRuleTypes.MIN]: { min: string }
  [ValidationRuleTypes.MAX]: { max: string }
  [ValidationRuleTypes.NUMBER]: { number: boolean }
  [ValidationRuleTypes.IS_BEFORE_DATE]: { targetDate: string }
  [ValidationRuleTypes.IS_AFTER_DATE]: { targetDate: string }
  [ValidationRuleTypes.DATE_INPUT]: { dateinput: string }
  [ValidationRuleTypes.CUSTOM_ERROR]: { customError: boolean }
  [ValidationRuleTypes.IS_VALID_EMAIL]: { isEmail: boolean }
  [ValidationRuleTypes.MASK]: { mask: string }
}
/**
 * TODO: What are the types??
 *
 * Should return true when its valid and false when its invalid
 */
export type ValidationHandler = (value: any, validation: any) => boolean

export type ValidationHandlers = Record<ValidationRuleTypes, ValidationHandler>
