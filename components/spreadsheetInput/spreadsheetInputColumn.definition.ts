import { Default, Description, Enum, Optional, Required } from '@tsed/schema'

export enum SPREADSHEET_COLUMN_INPUT_TYPES {
  TEXT = 'text',
  NUMERIC = 'numeric',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  DROPDOWN = 'dropdown',
  AUTOCOMPLETE = 'autocomplete',
}

export class SpreadsheetInputOptionModel {
  @Required()
  @Description('The value for an option.')
  value: string

  @Required()
  @Description('The label for an option.')
  label: string
}

export class SpreadsheetInputColumnDefinition {
  @Required()
  @Enum(SPREADSHEET_COLUMN_INPUT_TYPES)
  @Description('Cell input type used for column.')
  type: SPREADSHEET_COLUMN_INPUT_TYPES = SPREADSHEET_COLUMN_INPUT_TYPES.TEXT

  @Required()
  @Description('Label at the top of the column.')
  title: string = ''

  @Required()
  @Description('Key where cell data will be stored in the cell.')
  data: string = ''

  @Required()
  @Default(120)
  @Description('Column width')
  width: string | number = 120

  @Required()
  @Description("When set to 'true' entire column will be set to read only mode.")
  readOnly: boolean = false

  @Optional()
  @Description("When set to 'true' entire column will be set to read only mode.")
  selectOptions?: SpreadsheetInputOptionModel[] = []

  @Optional()
  @Description('Optional Class to be used on cells within this column')
  customClass?: string
}
