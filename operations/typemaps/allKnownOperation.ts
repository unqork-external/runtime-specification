import { ApiCallOperation } from '../definition/api-call'
import { ClearOperation } from '../definition/clear'
import { ClearValidationErrorOperation } from '../definition/clear-validation-errors'
import { DataWorkflowOperation } from '../definition/dataworkflow'
import { DecideOperation } from '../definition/decide'
import { ExecuteOperation } from '../definition/execute'
import { OpenNewPageOperation } from '../definition/openNewPage'
import { ParseFormulaOperation } from '../definition/parse-formula'
import { ResetOperation } from '../definition/reset'
import { SetPopupAlertOperation } from '../definition/set-popup-alert'
import { SetPropertyOperation } from '../definition/set-property'
import { SetSpinnerOperation } from '../definition/set-spinner'
import { SetValidationRuleOperation } from '../definition/set-validation-rules'
import { SetModalOperation } from '../definition/setModal'
import { ValidateOperation } from '../definition/validate'
import { ValidationRuleOperation } from '../definition/validate-rules'

export const AllOperations = [
  ApiCallOperation,
  ClearOperation,
  ClearValidationErrorOperation,
  DataWorkflowOperation,
  DecideOperation,
  ExecuteOperation,
  OpenNewPageOperation,
  ParseFormulaOperation,
  ResetOperation,
  SetModalOperation,
  SetPopupAlertOperation,
  SetPropertyOperation,
  SetSpinnerOperation,
  SetValidationRuleOperation,
  ValidateOperation,
  ValidationRuleOperation,
]
