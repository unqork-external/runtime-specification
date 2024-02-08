import { ValidationRuleTypes } from './validation.enum'

export type ValidationRuleValidationsValues = {
  [ValidationRuleTypes.REQUIRED]: boolean
  [ValidationRuleTypes.MAX_LENGTH]: number
  [ValidationRuleTypes.MIN_LENGTH]: number
  [ValidationRuleTypes.ARRAY_MAX_LENGTH]: unknown[]
  [ValidationRuleTypes.ARRAY_MIN_LENGTH]: unknown[]
  [ValidationRuleTypes.PATTERN]: RegExp
  [ValidationRuleTypes.MIN]: string
  [ValidationRuleTypes.MAX]: string
  [ValidationRuleTypes.NUMBER]: boolean
  // Note this could change base on how the date input component is crafted. For now leaving as a string
  [ValidationRuleTypes.DATE_INPUT]: string
  [ValidationRuleTypes.IS_BEFORE_DATE]: string
  [ValidationRuleTypes.IS_AFTER_DATE]: string
  [ValidationRuleTypes.IS_VALID_EMAIL]: boolean
}
