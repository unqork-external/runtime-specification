import { Description, Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { RowSelection } from '../../../components/muiBasicTable/selection/rowSelection'

export class TableSetSelectedRowOperationOptions {
  @Required()
  @Description('Key of the Table component to target for row selection')
  targetKey: string

  @Required()
  @TrimmedDescription(`
    Row(s) to be selected.
    An object containing key-value pairs where the key is the index of the row and the value is a boolean indicating whether the row should be selected.
  `)
  @Example('{"0": true}')
  selectedRows: RowSelection
}
