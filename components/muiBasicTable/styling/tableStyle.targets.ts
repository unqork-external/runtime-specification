import { Css } from '../../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TableTargetsEnum } from '../targets/tableTargets.enum'

export class TableStyleTargets {
  @Css()
  [TableTargetsEnum.root]: CssClassOrProps
  @Css()
  [TableTargetsEnum.table]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tablePaper]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tableContainer]: CssClassOrProps

  @Css()
  [TableTargetsEnum.tableHead]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tableHeadRow]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tableHeadCell]: CssClassOrProps

  @Css()
  [TableTargetsEnum.tableBody]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tableBodyRow]: CssClassOrProps
  @Css()
  [TableTargetsEnum.tableBodyCell]: CssClassOrProps
  @Css()
  [TableTargetsEnum.groupedCell]: CssClassOrProps
}
