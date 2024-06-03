import { Default, Description, Enum } from '@tsed/schema'

import { RowDensity } from './density/rowDensity'

export class RowState {
  @Description('an enum used to determine the className and styles provided for row width ')
  @Enum(RowDensity)
  @Default(RowDensity.Medium)
  rowDensity: RowDensity = RowDensity.Medium
}
