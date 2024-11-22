import { Default, Description, Property } from '@tsed/schema'

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from './paginationDefaults'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class PaginationState {
  @Description('Number of rows per page')
  @Property()
  @Default(DEFAULT_PAGE_SIZE)
  pageSize? = DEFAULT_PAGE_SIZE

  @TrimmedDescription(`
    The zero-based index of the page to which the data should be navigated. 
    This should be a non-negative integer where zero indicates the first page.
  `)
  @Property()
  @Default(DEFAULT_PAGE_INDEX)
  pageIndex? = DEFAULT_PAGE_INDEX

  @TrimmedDescription(`
    The position of the results set relative to 'pageIndex'. It's the result of 'pageIndex * pageSize'.
    Setting it from the configuration has no effect because it will always be derived from the above math.
  `)
  @Property()
  @Default(0)
  offset? = 0

  @TrimmedDescription(`
    Total number of rows on the dataset. This is automatically calculated by the Table
    except when manualPagination is "true"
  `)
  @Property()
  @Default(0)
  total? = 0

  @TrimmedDescription(`
    When set to "true", it enables server-side pagination. 
    In this case, the component will assume that the data that is passed 
    to the Table already has had the pagination logic applied. 
    Usually this would happen in an external API.
  `)
  @Property()
  @Default(false)
  manualPagination?: boolean

  @Description('When set to "true" it will reset the page index to zero when sorting/filtering')
  @Property()
  @Default(false)
  autoResetPageIndex? = false
}
