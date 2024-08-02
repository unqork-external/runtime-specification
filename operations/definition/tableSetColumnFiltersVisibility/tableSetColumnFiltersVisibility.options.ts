import { Any, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class TableSetColumnFiltersVisibilityOperationOptions extends TargetedOperationOptions {
  @Required()
  @TrimmedDescription(`
  Set the visibility of the filters in the Table component.
  This field can receive a true/false value, or a string input for interpolation.
  `)
  @Any('boolean', 'string')
  enableColumnFilters: boolean | string
}
