import { CollectionOf, Default, Description, Optional, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class PaginationState {
  @Description('Number of rows per page')
  @Optional()
  @Default(20)
  pageSize: number = 20

  @TrimmedDescription(`
    The zero-based index of the page to which the data should be navigated. 
    This should be a non-negative integer where zero indicates the first page.
  `)
  @Optional()
  @Default(0)
  pageIndex: number = 0

  @TrimmedDescription(`
    The position of the results set relative to 'pageIndex'. It's the result of 'pageIndex * pageSize'.
    Setting it from the configuration has no effect because it will always be derived from the above math.
  `)
  @Optional()
  @Default(0)
  offset: number = 0

  @TrimmedDescription(`
    Total number of rows on the dataset. This is automatically calculated by the Table
    except when manualPagination is "true"
  `)
  @Optional()
  @Default(0)
  total: number = 0

  @TrimmedDescription(`
    When set to "true", it enables server-side pagination. 
    In this case, the component will assume that the data that is passed 
    to the Table already has had the pagination logic applied. 
    Usually this would happen in an external API.
  `)
  @Optional()
  @Default(false)
  manualPagination: boolean = false

  @Description('When set to "true" it will reset the page index to zero when sorting/filtering')
  @Default(false)
  @Optional()
  autoResetPageIndex: boolean = false

  @Description('Specifies the row count options for the Rows Per Page dropdown')
  @CollectionOf(Number)
  @Optional()
  @Default([5, 10, 15, 20, 30])
  rowsPerPageOptions: number[] = [5, 10, 15, 20, 30]
}
