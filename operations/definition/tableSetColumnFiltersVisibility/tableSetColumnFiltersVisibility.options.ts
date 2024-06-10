import { Any, Description, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableSetColumnFiltersVisibilityOperationOptions {
  @Required()
  @Description('Key of the Table component to show/hide filters.')
  targetKey: string

  @Required()
  @TrimmedDescription(`
  Set the visibility of the filters in the Table component.
  This field can receive a true/false value, or a string input for interpolation.
  `)
  @Any('boolean', 'string')
  enableColumnFilters: boolean | string
}
