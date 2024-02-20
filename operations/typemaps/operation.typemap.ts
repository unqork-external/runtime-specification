// DONT REMOVE THE BELOW COMMENT - FOR OPERATION GENERATION
// OPERATION_IMPORT_STATEMENT
import { AddNestedComponentsOperation } from '../definition/addNestedComponents'
import { ApiCallOperation } from '../definition/api-call'
import { AppendStylingOperation } from '../definition/appendStyling'
import { AsyncAllSettledOperation } from '../definition/asyncAllSettled'
import { AutocompleteOperation } from '../definition/autocomplete'
import { CanvasApplyAllItemStateOperation } from '../definition/canvasApplyAllItemState'
import { CanvasApplyStructuredDataOperation } from '../definition/canvasApplyStructuredData'
import { CanvasDeleteItemOperation } from '../definition/canvasDeleteItem'
import { CanvasHydrateOperation } from '../definition/canvasHydrate'
import { ClearOperation } from '../definition/clear'
import { ClearValidationErrorOperation } from '../definition/clear-validation-errors'
import { ClearStylingOperation } from '../definition/clearStyling'
import { DataWorkflowOperation } from '../definition/dataworkflow'
import { DecideOperation } from '../definition/decide'
import { DownloadFileOperation } from '../definition/downloadFile'
import { DynamicOperation } from '../definition/dynamic'
import { EmitEventOperation } from '../definition/emitEvent'
import { ExecuteOperation } from '../definition/execute'
import { FetchModuleOperation } from '../definition/fetchModule'
import { FocusOperation } from '../definition/focus'
import { GoGoGadgetClipboardOperation } from '../definition/goGoGadgetClipboard'
import { IfOperation } from '../definition/if'
import { LoadModuleOperation } from '../definition/loadModule'
import { NavigationOperation } from '../definition/navigation'
import { OpenNewPageOperation } from '../definition/openNewPage'
import { ParseFormulaOperation } from '../definition/parse-formula'
import { PrinterOperation } from '../definition/printer'
import { RemoveNestedComponentsOperation } from '../definition/removeNestedComponents'
import { RenderModuleOperation } from '../definition/renderModule'
import { ResetOperation } from '../definition/reset'
import { ScrollToOperation } from '../definition/scrollTo'
import { SetPopupAlertOperation } from '../definition/set-popup-alert'
import { SetPropertyOperation } from '../definition/set-property'
import { SetSpinnerOperation } from '../definition/set-spinner'
import { SetValidationRuleOperation } from '../definition/set-validation-rules'
import { SetComponentStateOperation } from '../definition/setComponentState'
import { SetModalOperation } from '../definition/setModal'
import { SetStylingOperation } from '../definition/setStyling'
import { SetStylingTargetOperation } from '../definition/setStylingTarget'
import { SubmitOperation } from '../definition/submit'
import { TableAddColumnOperation } from '../definition/tableAddColumn'
import { TableAddRowOperation } from '../definition/tableAddRow'
import { TableClearOperation } from '../definition/tableClear'
import { TableGoToLastPageOperation } from '../definition/tableGoToLastPage'
import { TableGoToNextPageOperation } from '../definition/tableGoToNextPage'
import { TableGoToPageOperation } from '../definition/tableGoToPage'
import { TableGoToPreviousPageOperation } from '../definition/tableGoToPreviousPage'
import { TableRemoveColumnOperation } from '../definition/tableRemoveColumn'
import { TableRemoveRowsOperation } from '../definition/tableRemoveRows'
import { TableSetActionToolbarVisibilityOperation } from '../definition/tableSetActionToolbarVisibility'
import { TableSetAllRowsExpandedOperation } from '../definition/tableSetAllRowsExpanded'
import { TableSetColumnFilterOperation } from '../definition/tableSetColumnFilter'
import { TableSetColumnFiltersVisibilityOperation } from '../definition/tableSetColumnFiltersVisibility'
import { TableSetColumnPinningOperation } from '../definition/tableSetColumnPinning'
import { TableSetColumnVisibilityOperation } from '../definition/tableSetColumnVisibility'
import { TableSetGlobalFilterOperation } from '../definition/tableSetGlobalFilter'
import { TableSetGlobalFilterVisibilityOperation } from '../definition/tableSetGlobalFilterVisibility'
import { TableSetGroupingCriteriaOperation } from '../definition/tableSetGroupingCriteria'
import { TableSetNavigateDownOnPressEnterOperation } from '../definition/tableSetNavigateDownOnPressEnter'
import { TableSetPageSizeOperation } from '../definition/tableSetPageSize'
import { TableSetRowDensityOperation } from '../definition/tableSetRowDensity'
import { TableSetRowExpandedOperation } from '../definition/tableSetRowExpanded'
import { TableSetRowPinningOperation } from '../definition/tableSetRowPinning'
import { TableSetSelectedRowOperation } from '../definition/tableSetSelectedRow'
import { TableSortByColumnOperation } from '../definition/tableSortByColumn'
import { TableToggleGroupingOperation } from '../definition/tableToggleGrouping'
import { TableToGoFirstPageOperation } from '../definition/tableToGoFirstPage'
import { ToggleOperation } from '../definition/toggle'
import { ToggleClassOnTargetOperation } from '../definition/toggleClassOnTarget'
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
  [OperationTypes.CANVAS_APPLY_ALL_ITEM_STATE]: CanvasApplyAllItemStateOperation,
  [OperationTypes.CANVAS_APPLY_STRUCTURED_DATA]: CanvasApplyStructuredDataOperation,
  [OperationTypes.CANVAS_DELETE_ITEM]: CanvasDeleteItemOperation,
  [OperationTypes.CANVAS_HYDRATE]: CanvasHydrateOperation,
  [OperationTypes.ASYNC_ALL_SETTLED]: AsyncAllSettledOperation,
  [OperationTypes.TRY_CATCH]: TryCatchOperation,
  [OperationTypes.VALIDATE_MODULE]: ValidateModuleOperation,
  [OperationTypes.TOGGLE_CLASS_ON_TARGET]: ToggleClassOnTargetOperation,
  [OperationTypes.APPEND_STYLING]: AppendStylingOperation,
  [OperationTypes.CLEAR_STYLING]: ClearStylingOperation,
  [OperationTypes.SET_STYLING_TARGET]: SetStylingTargetOperation,
  [OperationTypes.SET_STYLING]: SetStylingOperation,
  [OperationTypes.EMIT_EVENT]: EmitEventOperation,
  [OperationTypes.TABLE_SET_ACTION_TOOLBAR_VISIBILITY]: TableSetActionToolbarVisibilityOperation,
  [OperationTypes.TABLE_SET_GLOBAL_FILTER_VISIBILITY]: TableSetGlobalFilterVisibilityOperation,
  [OperationTypes.TABLE_SET_COLUMN_FILTERS_VISIBILITY]: TableSetColumnFiltersVisibilityOperation,
  [OperationTypes.TABLE_SET_ALL_ROWS_EXPANDED]: TableSetAllRowsExpandedOperation,
  [OperationTypes.TABLE_SET_ROW_EXPANDED]: TableSetRowExpandedOperation,
  [OperationTypes.TABLE_REMOVE_ROWS]: TableRemoveRowsOperation,
  [OperationTypes.TABLE_REMOVE_COLUMN]: TableRemoveColumnOperation,
  [OperationTypes.TABLE_GO_TO_PAGE]: TableGoToPageOperation,
  [OperationTypes.TABLE_GO_TO_LAST_PAGE]: TableGoToLastPageOperation,
  [OperationTypes.TABLE_GO_TO_FIRST_PAGE]: TableToGoFirstPageOperation,
  [OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE]: TableGoToPreviousPageOperation,
  [OperationTypes.TABLE_GO_TO_NEXT_PAGE]: TableGoToNextPageOperation,
  [OperationTypes.TABLE_SET_PAGE_SIZE]: TableSetPageSizeOperation,
  [OperationTypes.TABLE_ADD_COLUMN]: TableAddColumnOperation,
  [OperationTypes.TABLE_CLEAR]: TableClearOperation,
  [OperationTypes.TABLE_SET_COLUMN_FILTER]: TableSetColumnFilterOperation,
  [OperationTypes.TABLE_SET_GLOBAL_FILTER]: TableSetGlobalFilterOperation,
  [OperationTypes.TABLE_SET_ROW_PINNING]: TableSetRowPinningOperation,
  [OperationTypes.TABLE_SET_COLUMN_PINNING]: TableSetColumnPinningOperation,
  [OperationTypes.TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER]: TableSetNavigateDownOnPressEnterOperation,
  [OperationTypes.TABLE_SET_SELECTED_ROW]: TableSetSelectedRowOperation,
  [OperationTypes.TABLE_SET_GROUPING_CRITERIA]: TableSetGroupingCriteriaOperation,
  [OperationTypes.TABLE_SET_COLUMN_VISIBILITY]: TableSetColumnVisibilityOperation,
  [OperationTypes.TABLE_SET_ROW_DENSITY]: TableSetRowDensityOperation,
  [OperationTypes.TABLE_TOGGLE_GROUPING]: TableToggleGroupingOperation,
  [OperationTypes.TABLE_ADD_ROW]: TableAddRowOperation,
  [OperationTypes.TABLE_SORT_BY_COLUMN]: TableSortByColumnOperation,
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
