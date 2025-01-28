// OPERATION_IMPORT_STATEMENT
import { AddNestedComponentsOperation } from '../definition/addNestedComponents'
import { AddQueryParametersOperation } from '../definition/addQueryParameters'
import { ApiCallOperation } from '../definition/api-call'
import { AppendStylingOperation } from '../definition/appendStyling'
import { AsyncAllSettledOperation } from '../definition/asyncAllSettled'
import { AutocompleteOperation } from '../definition/autocomplete'
import { ClearOperation } from '../definition/clear'
import { ClearValidationErrorOperation } from '../definition/clear-validation-errors'
import { ClearQueryParametersOperation } from '../definition/clearQueryParameters'
import { ClearStylingOperation } from '../definition/clearStyling'
import { DataWorkflowOperation } from '../definition/dataworkflow'
import { DecideOperation } from '../definition/decide'
import { DownloadFileOperation } from '../definition/downloadFile'
import { DynamicOperation } from '../definition/dynamic'
import { EmitEventOperation } from '../definition/emitEvent'
import { ExecuteOperation } from '../definition/execute'
import { ExecuteExternalCommandOperation } from '../definition/executeExternalCommand'
import { FetchModuleOperation } from '../definition/fetchModule'
import { FocusOperation } from '../definition/focus'
import { GoGoGadgetClipboardOperation } from '../definition/goGoGadgetClipboard'
import { IfOperation } from '../definition/if'
import { LoadModuleOperation } from '../definition/loadModule'
import { ManipulateDomUnsafeOperation } from '../definition/manipulateDomUnsafe'
import { NavigationOperation } from '../definition/navigation'
import { OpenNewPageOperation } from '../definition/openNewPage'
import { ParseFormulaOperation } from '../definition/parse-formula'
import { PrinterOperation } from '../definition/printer'
import { RemoveNestedComponentsOperation } from '../definition/removeNestedComponents'
import { RemoveQueryParametersOperation } from '../definition/removeQueryParameters'
import { RenderModuleOperation } from '../definition/renderModule'
import { ResetOperation } from '../definition/reset'
import { ResetInitialConfigOperation } from '../definition/resetInitialConfig'
import { ScrollToOperation } from '../definition/scrollTo'
import { SetPopupAlertOperation } from '../definition/set-popup-alert'
import { SetPropertyOperation } from '../definition/set-property'
import { SetSpinnerOperation } from '../definition/set-spinner'
import { SetValidationRuleOperation } from '../definition/set-validation-rules'
import { SetComponentStateOperation } from '../definition/setComponentState'
import { SetModalOperation } from '../definition/setModal'
import { SetQueryParametersOperation } from '../definition/setQueryParameters'
import { SetStylingOperation } from '../definition/setStyling'
import { SetStylingTargetOperation } from '../definition/setStylingTarget'
import { SubmitOperation } from '../definition/submit'
import { ToggleOperation } from '../definition/toggle'
import { ToggleClassOnTargetOperation } from '../definition/toggleClassOnTarget'
import { ToggleReflexiveInputOperation } from '../definition/toggleReflexiveInput'
import { TryCatchOperation } from '../definition/tryCatch'
import { ValidateOperation } from '../definition/validate'
import { ValidationRuleOperation } from '../definition/validate-rules'
import { ValidateModuleOperation } from '../definition/validateModule'
import { WorkflowNavigateOperation } from '../definition/workflowNavigate'
import { WorkflowSaveAndExitOperation } from '../definition/workflowSaveAndExit'
import { OperationTypes } from '../enums/operation-types.enum'

export const OperationTypeMap = {
  // DONT REMOVE THE BELOW COMMENT - FOR OPERATION GENERATION
  // OPERATION_TYPE_MAP
  [OperationTypes.MANIPULATE_DOM_UNSAFE]: ManipulateDomUnsafeOperation,
  [OperationTypes.TOGGLE_REFLEXIVE_INPUT]: ToggleReflexiveInputOperation,
  [OperationTypes.RESET_INITIAL_CONFIG]: ResetInitialConfigOperation,
  [OperationTypes.EXECUTE_EXTERNAL_COMMAND]: ExecuteExternalCommandOperation,
  [OperationTypes.CLEAR_QUERY_PARAMETERS]: ClearQueryParametersOperation,
  [OperationTypes.REMOVE_QUERY_PARAMETERS]: RemoveQueryParametersOperation,
  [OperationTypes.ADD_QUERY_PARAMETERS]: AddQueryParametersOperation,
  [OperationTypes.SET_QUERY_PARAMETERS]: SetQueryParametersOperation,
  [OperationTypes.ASYNC_ALL_SETTLED]: AsyncAllSettledOperation,
  [OperationTypes.TRY_CATCH]: TryCatchOperation,
  [OperationTypes.VALIDATE_MODULE]: ValidateModuleOperation,
  [OperationTypes.TOGGLE_CLASS_ON_TARGET]: ToggleClassOnTargetOperation,
  [OperationTypes.APPEND_STYLING]: AppendStylingOperation,
  [OperationTypes.CLEAR_STYLING]: ClearStylingOperation,
  [OperationTypes.SET_STYLING_TARGET]: SetStylingTargetOperation,
  [OperationTypes.SET_STYLING]: SetStylingOperation,
  [OperationTypes.EMIT_EVENT]: EmitEventOperation,
  [OperationTypes.PRINTER]: PrinterOperation,
  [OperationTypes.DOWNLOAD_FILE]: DownloadFileOperation,
  [OperationTypes.SCROLL_TO]: ScrollToOperation,
  [OperationTypes.WORKFLOW_SAVE_AND_EXIT]: WorkflowSaveAndExitOperation,
  [OperationTypes.FOCUS]: FocusOperation,
  [OperationTypes.LOAD_MODULE]: LoadModuleOperation,
  [OperationTypes.RENDER_MODULE]: RenderModuleOperation,
  [OperationTypes.FETCH_MODULE]: FetchModuleOperation,
  [OperationTypes.WORKFLOW_NAVIGATE]: WorkflowNavigateOperation,
  [OperationTypes.DYNAMIC]: DynamicOperation,
  [OperationTypes.ADD_NESTED_COMPONENTS]: AddNestedComponentsOperation,
  [OperationTypes.NAVIGATION]: NavigationOperation,
  [OperationTypes.SET_COMPONENT_STATE]: SetComponentStateOperation,
  [OperationTypes.AUTOCOMPLETE]: AutocompleteOperation,
  [OperationTypes.GO_GO_GADGET_CLIPBOARD]: GoGoGadgetClipboardOperation,
  [OperationTypes.IF]: IfOperation,
  [OperationTypes.API_CALL]: ApiCallOperation,
  [OperationTypes.CLEAR]: ClearOperation,
  [OperationTypes.CLEAR_VALIDATION_ERRORS]: ClearValidationErrorOperation,
  [OperationTypes.DATA_WORKFLOW]: DataWorkflowOperation,
  [OperationTypes.DECIDE]: DecideOperation,
  [OperationTypes.EXECUTE]: ExecuteOperation,
  [OperationTypes.OPEN_NEW_PAGE]: OpenNewPageOperation,
  [OperationTypes.REMOVE_NESTED_COMPONENTS]: RemoveNestedComponentsOperation,
  [OperationTypes.RESET]: ResetOperation,
  [OperationTypes.SET_MODAL]: SetModalOperation,
  [OperationTypes.SET_POPUP_ALERT]: SetPopupAlertOperation,
  [OperationTypes.SET_PROPERTY]: SetPropertyOperation,
  [OperationTypes.SET_SPINNER]: SetSpinnerOperation,
  [OperationTypes.SUBMIT]: SubmitOperation,
  [OperationTypes.TOGGLE]: ToggleOperation,
  [OperationTypes.SET_VALIDATION_RULE]: SetValidationRuleOperation,
  [OperationTypes.VALIDATE]: ValidateOperation,
  [OperationTypes.VALIDATE_RULES]: ValidationRuleOperation,
  [OperationTypes.PARSE_FORMULA]: ParseFormulaOperation,
} as const
