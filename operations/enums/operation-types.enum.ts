export enum OperationTypes {
  // NEW_OPERATION_TYPE
  RESET_INITIAL_CONFIG = 'RESET_INITIAL_CONFIG',
  OPS_BUILDER_HYDRATE = 'OPS_BUILDER_HYDRATE',
  EXECUTE_EXTERNAL_COMMAND = 'EXECUTE_EXTERNAL_COMMAND',
  SPREADSHEET_INPUT_REMOVE_COLUMN = 'SPREADSHEET_INPUT_REMOVE_COLUMN',
  SPREADSHEET_INPUT_REMOVE_ROW = 'SPREADSHEET_INPUT_REMOVE_ROW',
  SPREADSHEET_INPUT_INSERT_ROWS = 'SPREADSHEET_INPUT_INSERT_ROWS',
  SPREADSHEET_INPUT_INSERT_COLUMNS = 'SPREADSHEET_INPUT_INSERT_COLUMNS',
  CANVAS_SET_ITEM_STATUS = 'CANVAS_SET_ITEM_STATUS',
  CLEAR_QUERY_PARAMETERS = 'CLEAR_QUERY_PARAMETERS',
  REMOVE_QUERY_PARAMETERS = 'REMOVE_QUERY_PARAMETERS',
  ADD_QUERY_PARAMETERS = 'ADD_QUERY_PARAMETERS',
  SET_QUERY_PARAMETERS = 'SET_QUERY_PARAMETERS',
  CONFIGURATION_EDITOR_SAVE = 'CONFIGURATION_EDITOR_SAVE',
  CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT = 'CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT',
  CANVAS_GET_COMPONENT_CHILDREN = 'CANVAS_GET_COMPONENT_CHILDREN',
  TRAY_SET_DISABLED_BY = 'TRAY_SET_DISABLED_BY',
  TRAY_FILTER_ITEMS = 'TRAY_FILTER_ITEMS',
  TRAY_APPLY_GROUPS = 'TRAY_APPLY_GROUPS',
  TOGGLE_ITERATOR_PROPERTY = 'TOGGLE_ITERATOR_PROPERTY',
  CANVAS_APPLY_ALL_ITEM_STATE = 'CANVAS_APPLY_ALL_ITEM_STATE',
  CANVAS_APPLY_STRUCTURED_DATA = 'CANVAS_APPLY_STRUCTURED_DATA',
  CANVAS_DELETE_ITEM = 'CANVAS_DELETE_ITEM',
  CANVAS_HYDRATE = 'CANVAS_HYDRATE',
  ASYNC_ALL_SETTLED = 'ASYNC_ALL_SETTLED',
  TRY_CATCH = 'TRY_CATCH',
  VALIDATE_MODULE = 'VALIDATE_MODULE',
  EMIT_EVENT = 'EMIT_EVENT',
  MENU_TOGGLE_AT = 'MENU_TOGGLE_AT',
  TABLE_SET_ACTION_TOOLBAR_VISIBILITY = 'TABLE_SET_ACTION_TOOLBAR_VISIBILITY',
  TABLE_SET_GLOBAL_FILTER_VISIBILITY = 'TABLE_SET_GLOBAL_FILTER_VISIBILITY',
  TABLE_SET_COLUMN_FILTERS_VISIBILITY = 'TABLE_SET_COLUMN_FILTERS_VISIBILITY',
  TABLE_SET_ALL_ROWS_EXPANDED = 'TABLE_SET_ALL_ROWS_EXPANDED',
  TABLE_SET_ROW_EXPANDED = 'TABLE_SET_ROW_EXPANDED',
  TABLE_REMOVE_ROWS = 'TABLE_REMOVE_ROWS',
  TABLE_REMOVE_COLUMN = 'TABLE_REMOVE_COLUMN',
  TABLE_RENAME_COLUMN = 'TABLE_RENAME_COLUMN',
  TABLE_GO_TO_PAGE = 'TABLE_GO_TO_PAGE',
  TABLE_GO_TO_LAST_PAGE = 'TABLE_GO_TO_LAST_PAGE',
  TABLE_GO_TO_FIRST_PAGE = 'TABLE_GO_TO_FIRST_PAGE',
  TABLE_GO_TO_PREVIOUS_PAGE = 'TABLE_GO_TO_PREVIOUS_PAGE',
  TABLE_GO_TO_NEXT_PAGE = 'TABLE_GO_TO_NEXT_PAGE',
  TABLE_SET_PAGE_SIZE = 'TABLE_SET_PAGE_SIZE',
  TABLE_ADD_COLUMN = 'TABLE_ADD_COLUMN',
  TABLE_CLEAR = 'TABLE_CLEAR',
  TABLE_SET_COLUMN_FILTER = 'TABLE_SET_COLUMN_FILTER',
  TABLE_SET_COLUMN_VISIBILITY = 'TABLE_SET_COLUMN_VISIBILITY',
  TABLE_SET_ROW_DENSITY = 'TABLE_SET_ROW_DENSITY',
  TABLE_SET_GLOBAL_FILTER = 'TABLE_SET_GLOBAL_FILTER',
  TABLE_SET_ROW_PINNING = 'TABLE_SET_ROW_PINNING',
  TABLE_SET_COLUMN_PINNING = 'TABLE_SET_COLUMN_PINNING',
  TABLE_SET_SELECTED_ROW = 'TABLE_SET_SELECTED_ROW',
  TABLE_SET_GROUPING_CRITERIA = 'TABLE_SET_GROUPING_CRITERIA',
  TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER = 'TABLE_SET_NAVIGATE_DOWN_ON_PRESS_ENTER',
  TABLE_TOGGLE_GROUPING = 'TABLE_TOGGLE_GROUPING',
  TABLE_ADD_ROW = 'TABLE_ADD_ROW',
  TABLE_SORT_BY_COLUMN = 'TABLE_SORT_BY_COLUMN',
  TABLE_PASTE_VALUES = 'TABLE_PASTE_VALUES',
  TABLE_COPY_VALUES = 'TABLE_COPY_VALUES',
  PRINTER = 'PRINTER',
  SCROLL_TO = 'SCROLL_TO',
  WORKFLOW_SAVE_AND_EXIT = 'WORKFLOW_SAVE_AND_EXIT',
  FOCUS = 'FOCUS',
  LOAD_MODULE = 'LOAD_MODULE',
  RENDER_MODULE = 'RENDER_MODULE',
  FETCH_MODULE = 'FETCH_MODULE',
  WORKFLOW_NAVIGATE = 'WORKFLOW_NAVIGATE',
  DYNAMIC = 'DYNAMIC',
  ADD_NESTED_COMPONENTS = 'ADD_NESTED_COMPONENTS',
  REMOVE_NESTED_COMPONENTS = 'REMOVE_NESTED_COMPONENTS',
  NAVIGATION = 'NAVIGATION',
  SET_COMPONENT_STATE = 'SET_COMPONENT_STATE',
  AUTOCOMPLETE = 'AUTOCOMPLETE',
  GO_GO_GADGET_CLIPBOARD = 'GO_GO_GADGET_CLIPBOARD',
  DOWNLOAD_FILE = 'DOWNLOAD_FILE',

  /**
   * Runtime Control Flow Operation
   * - Should not be overridable by users
   */
  IF = 'IF',

  /**
   * Make an API call with the engine.
   *
   * @type {OperationTypes.API_CALL}
   */
  API_CALL = 'API_CALL',

  /**
   * This is a system level way to invoke the operations defined for a component.
   * For instance, a user can define N operations on a component, and when an execute operation
   * is invoked against such a component, the target component's operations should run.
   *
   *
   * @type {OperationTypes.EXECUTE}
   */
  EXECUTE = 'EXECUTE',

  /**
   * The Decide operation can be used to build complex conditional logic. One or more inputs
   * can be used as criteria to control execution of zero or many output operations.
   *
   * @type {OperationTypes.DATA_WORKFLOW}
   */
  DATA_WORKFLOW = 'DATA_WORKFLOW',

  /**
   * The Decide operation can be used to build complex conditional logic. One or more inputs
   * can be used as criteria to control execution of zero or many output operations.
   *
   * @type {OperationTypes.DECIDE}
   */
  DECIDE = 'DECIDE',

  /**
   * The Clear operation refers to clearing the 'value' property in state
   * for a particular component
   * This is essentially a branching logic operation.
   *
   * @type {OperationTypes.CLEAR}
   */
  CLEAR = 'CLEAR',

  /**
   * Validation
   *
   * @type {OperationTypes.VALIDATE}
   */
  VALIDATE = 'VALIDATE',

  /**
   * Used to validate all validation rules on a component
   *
   * Note: This is not in use currently
   *
   * @type {OperationTypes.VALIDATE_RULES}
   */
  VALIDATE_RULES = 'VALIDATE_RULES',

  /**
   * Clear all errors in the validationResult.errors array
   *
   * @type {OperationTypes.CLEAR_VALIDATION_ERRORS}
   */
  CLEAR_VALIDATION_ERRORS = 'CLEAR_VALIDATION_ERRORS',

  /**
   * Set a validation Rule
   *
   * @type {OperationTypes.SET_VALIDATION_RULE}
   */
  SET_VALIDATION_RULE = 'SET_VALIDATION_RULE',

  /**
   * The Set Prop operation can be used to set a specific component prop to value
   * This is useful if two Operations are targeting the same property
   * ex. VISIBLE & HIDDEN both update the hidden property
   *
   * @type {OperationTypes.SET_PROPERTY}
   */
  SET_PROPERTY = 'SET_PROPERTY',

  /**
   * The APPEND_STYLING_TO_TARGET operation will append CSS objects and/or classes
   *  to a specific targets' existing styling configuration
   *
   * @type {OperationTypes.APPEND_STYLING}
   */
  APPEND_STYLING = 'APPEND_STYLING',

  /**
   * The Clear Styling operation will clear any styles added to a component through configuration
   *
   * @type {OperationTypes.CLEAR_STYLING}
   */
  CLEAR_STYLING = 'CLEAR_STYLING',

  /**
   * The Set Styling operation is used to set the `styling` property on a target component
   * This operation will override any existing `styling` configuration on the component
   *
   * @type {OperationTypes.SET_STYLING}
   */
  SET_STYLING = 'SET_STYLING',

  /**
   * The Set Styling Target operation is used to set CSS properties or classnames to a single, specific target on a component
   *
   * @type {OperationTypes.SET_STYLING_TARGET}
   */
  SET_STYLING_TARGET = 'SET_STYLING_TARGET',

  /**
   * This operation will add a classname to a target if it is not currently there
   * This operation will remove a classname from a target if it currently exists
   *
   * @type {OperationTypes.TOGGLE_CLASS_ON_TARGET}
   */
  TOGGLE_CLASS_ON_TARGET = 'TOGGLE_CLASS_ON_TARGET',

  /**
   * The reset operation refers to reset the state of particular component to original state
   * This is essentially a branching logic operation.
   *
   * @type {OperationTypes.RESET}
   */
  RESET = 'RESET',

  /**
   *
   * @type {OperationTypes.PARSE_FORMULA}
   */
  PARSE_FORMULA = 'PARSE_FORMULA',

  /**
   * Sets the popup alert data in state
   *
   * @type {OperationTypes.SET_POPUP_ALERT}
   */
  SET_POPUP_ALERT = 'SET_POPUP_ALERT',

  /**
   * Sends the
   *
   * @type {OperationTypes.SET_SPINNER}
   */
  SET_SPINNER = 'SET_SPINNER',

  /**
   * Sets the popup alert data in state
   *
   * @type {OperationTypes.OPEN_NEW_PAGE}
   */
  OPEN_NEW_PAGE = 'OPEN_NEW_PAGE',

  /**
   * Either opens or closes a modal
   * (not to be confused with SET_POPUP_ALERT which are simple alerts vs components rendering in a popup)
   * Currently only applies to a panel component
   *
   * @type {OperationTypes.SET_MODAL}
   */
  SET_MODAL = 'SET_MODAL',

  /**
   * When given an entity key will make a submission using the submission manger using the target entities data
   *
   * If no key is provided use will use the SUBMISSION_DATA entity
   *
   * @type {OperationTypes.SUBMIT}
   */
  SUBMIT = 'SUBMIT',

  /**
   * Toggle a boolean property
   */
  TOGGLE = 'TOGGLE',
}
