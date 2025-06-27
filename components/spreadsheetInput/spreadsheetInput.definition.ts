import { Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { SpreadsheetInputStyling } from './spreadsheetInput.styling'
import type { SpreadsheetInputColumnDefinition } from './spreadsheetInputColumn.definition'
import { SpreadsheetInputTargets } from './spreadsheetInputTargets.enum'
import { TrimmedDescription, ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('spreadsheetInput')
@ViewTargets(SpreadsheetInputTargets)
export class SpreadsheetInputComponentDefinition extends BaseComponentDefinition {
  @Const('spreadsheetInput')
  type: 'spreadsheetInput' = 'spreadsheetInput' as const

  @Required()
  @Description('Collection of columns definitions')
  columnsData: SpreadsheetInputColumnDefinition[] = []

  @Required()
  @TrimmedDescription(
    `
      Formatted values of the spreadsheetInput component.
      This value stays in sync with cell values of Handson Table.
   `,
  )
  value: Record<string, unknown>[] = []

  @Required()
  @Default(300)
  @Description('Height of the spreadsheet.')
  height: string | number = 300

  @Required()
  @Default(36)
  @Description('Height of the rows in the spreadsheet.')
  rowHeights: string | number = 36

  @Required()
  @Default('100%')
  @Description('Width of the spreadsheet.')
  width: string | number = '100%'

  @Required()
  display: Display = new Display()

  @Optional()
  @Description('Optionally show controls at top of spreadsheetInput. Good for debugging locally.')
  showControls: boolean = false

  @Optional()
  declare styling?: SpreadsheetInputStyling

  @Optional()
  declare signals?: SignalTargets<SpreadsheetInputTargets>
}
