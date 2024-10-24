// OPERATION_IMPORT_STATEMENT
import { AddNestedComponentsOperation } from '../definition/addNestedComponents'
import { AddQueryParametersOperation } from '../definition/addQueryParameters'
import { ApiCallOperation } from '../definition/api-call'
import { AppendStylingOperation } from '../definition/appendStyling'
import { AsyncAllSettledOperation } from '../definition/asyncAllSettled'
import { AutocompleteOperation } from '../definition/autocomplete'
import { CanvasApplyAllItemStateOperation } from '../definition/canvasApplyAllItemState'
import { CanvasApplyStructuredDataOperation } from '../definition/canvasApplyStructuredData'
import { CanvasDeleteItemOperation } from '../definition/canvasDeleteItem'
import { CanvasGetComponentChildrenOperation } from '../definition/canvasGetComponentChildren'
import { CanvasHydrateOperation } from '../definition/canvasHydrate'
import { CanvasSetItemStatusOperation } from '../definition/canvasSetItemStatus'
import { ClearOperation } from '../definition/clear'
import { ClearValidationErrorOperation } from '../definition/clear-validation-errors'
import { ClearQueryParametersOperation } from '../definition/clearQueryParameters'
import { ClearStylingOperation } from '../definition/clearStyling'
import { ConfigurationEditorSaveOperation } from '../definition/configurationEditorSave'
import { ConfigurationEditorToggleReflexiveInputOperation } from '../definition/configurationEditorToggleReflexiveInput'
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
import { MenuToggleAtOperation } from '../definition/menuToggleAt'
import { NavigationOperation } from '../definition/navigation'
import { OpenNewPageOperation } from '../definition/openNewPage'
import { OpsBuilderHydrateOperation } from '../definition/opsBuilderHydrate'
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
import { SpreadsheetInputInsertColumnsOperation } from '../definition/spreadsheetInputInsertColumns'
import { SpreadsheetInputInsertRowsOperation } from '../definition/spreadsheetInputInsertRows'
import { SpreadsheetInputRemoveColumnOperation } from '../definition/spreadsheetInputRemoveColumn'
import { SpreadsheetInputRemoveRowOperation } from '../definition/spreadsheetInputRemoveRow'
import { SubmitOperation } from '../definition/submit'
import { TableAddColumnOperation } from '../definition/tableAddColumn'
import { TableAddRowOperation } from '../definition/tableAddRow'
import { TableClearOperation } from '../definition/tableClear'
import { TableCopyValuesOperation } from '../definition/tableCopyValues'
import { TableGoToFirstPageOperation } from '../definition/tableGoToFirstPage'
import { TableGoToLastPageOperation } from '../definition/tableGoToLastPage'
import { TableGoToNextPageOperation } from '../definition/tableGoToNextPage'
import { TableGoToPageOperation } from '../definition/tableGoToPage'
import { TableGoToPreviousPageOperation } from '../definition/tableGoToPreviousPage'
import { TablePasteValuesOperation } from '../definition/tablePasteValues'
import { TableRemoveColumnOperation } from '../definition/tableRemoveColumn'
import { TableRemoveRowsOperation } from '../definition/tableRemoveRows'
import { TableRenameColumnOperation } from '../definition/tableRenameColumn'
import { TableSetActionToolbarVisibilityOperation } from '../definition/tableSetActionToolbarVisibility'
import { TableSetAllRowsExpandedOperation } from '../definition/tableSetAllRowsExpanded'
import { TableSetColumnFilterOperation } from '../definition/tableSetColumnFilter'
import { TableSetColumnFiltersVisibilityOperation } from '../definition/tableSetColumnFiltersVisibility'
import { TableSetColumnOrderingOperation } from '../definition/tableSetColumnOrdering'
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
import { ToggleOperation } from '../definition/toggle'
import { ToggleClassOnTargetOperation } from '../definition/toggleClassOnTarget'
import { ToggleIteratorPropertyOperation } from '../definition/toggleIteratorProperty'
import { TrayApplyGroupsOperation } from '../definition/trayApplyGroups'
import { TrayFilterItemsOperation } from '../definition/trayFilterItems'
import { TraySetDisabledByOperation } from '../definition/traySetDisabledBy'
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
  [OperationTypes.RESET_INITIAL_CONFIG]: ResetInitialConfigOperation,
  [OperationTypes.OPS_BUILDER_HYDRATE]: OpsBuilderHydrateOperation,
  [OperationTypes.EXECUTE_EXTERNAL_COMMAND]: ExecuteExternalCommandOperation,
  [OperationTypes.SPREADSHEET_INPUT_REMOVE_COLUMN]: SpreadsheetInputRemoveColumnOperation,
  [OperationTypes.SPREADSHEET_INPUT_REMOVE_ROW]: SpreadsheetInputRemoveRowOperation,
  [OperationTypes.SPREADSHEET_INPUT_INSERT_ROWS]: SpreadsheetInputInsertRowsOperation,
  [OperationTypes.SPREADSHEET_INPUT_INSERT_COLUMNS]: SpreadsheetInputInsertColumnsOperation,
  [OperationTypes.CANVAS_SET_ITEM_STATUS]: CanvasSetItemStatusOperation,
  [OperationTypes.CLEAR_QUERY_PARAMETERS]: ClearQueryParametersOperation,
  [OperationTypes.REMOVE_QUERY_PARAMETERS]: RemoveQueryParametersOperation,
  [OperationTypes.ADD_QUERY_PARAMETERS]: AddQueryParametersOperation,
  [OperationTypes.SET_QUERY_PARAMETERS]: SetQueryParametersOperation,
  [OperationTypes.CONFIGURATION_EDITOR_SAVE]: ConfigurationEditorSaveOperation,
  [OperationTypes.CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT]: ConfigurationEditorToggleReflexiveInputOperation,
  [OperationTypes.CANVAS_GET_COMPONENT_CHILDREN]: CanvasGetComponentChildrenOperation,
  [OperationTypes.TRAY_SET_DISABLED_BY]: TraySetDisabledByOperation,
  [OperationTypes.TRAY_FILTER_ITEMS]: TrayFilterItemsOperation,
  [OperationTypes.TRAY_APPLY_GROUPS]: TrayApplyGroupsOperation,
  [OperationTypes.TOGGLE_ITERATOR_PROPERTY]: ToggleIteratorPropertyOperation,
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
  [OperationTypes.TABLE_RENAME_COLUMN]: TableRenameColumnOperation,
  [OperationTypes.TABLE_GO_TO_PAGE]: TableGoToPageOperation,
  [OperationTypes.TABLE_GO_TO_LAST_PAGE]: TableGoToLastPageOperation,
  [OperationTypes.TABLE_GO_TO_FIRST_PAGE]: TableGoToFirstPageOperation,
  [OperationTypes.TABLE_GO_TO_PREVIOUS_PAGE]: TableGoToPreviousPageOperation,
  [OperationTypes.TABLE_GO_TO_NEXT_PAGE]: TableGoToNextPageOperation,
  [OperationTypes.TABLE_SET_PAGE_SIZE]: TableSetPageSizeOperation,
  [OperationTypes.TABLE_ADD_COLUMN]: TableAddColumnOperation,
  [OperationTypes.TABLE_CLEAR]: TableClearOperation,
  [OperationTypes.TABLE_SET_COLUMN_FILTER]: TableSetColumnFilterOperation,
  [OperationTypes.TABLE_SET_GLOBAL_FILTER]: TableSetGlobalFilterOperation,
  [OperationTypes.TABLE_SET_COLUMN_ORDERING]: TableSetColumnOrderingOperation,
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
  [OperationTypes.TABLE_PASTE_VALUES]: TablePasteValuesOperation,
  [OperationTypes.TABLE_COPY_VALUES]: TableCopyValuesOperation,
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
  [OperationTypes.MENU_TOGGLE_AT]: MenuToggleAtOperation,
} as const
