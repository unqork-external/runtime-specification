import { Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { RowSelection } from '../../../components/muiBasicTable/selection/rowSelection'
import { TargetedOperationOptions } from '../../interface'

export class TableSetSelectedRowOperationOptions extends TargetedOperationOptions {
  @Required()
  @TrimmedDescription(`
    Row(s) to be selected.
    An object containing key-value pairs where the key is the index of the row and the value is a boolean indicating whether the row should be selected.
  `)
  @Example('{"0": true}')
  selectedRows: RowSelection
}
