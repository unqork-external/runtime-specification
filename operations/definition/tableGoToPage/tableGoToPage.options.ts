import { Any, Description, Property } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class TableGoToPageOperationOptions {
  @Description('The key for the component we want to set page size')
  @Property()
  targetKey: string

  @Description(
    trimAll(`
    The page number user wants to navigate to
  `),
  )
  @Any('number', 'string')
  pageNumber: number | string
}
