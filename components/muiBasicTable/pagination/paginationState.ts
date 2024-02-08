import { Default, Description, Property } from '@tsed/schema'

export class PaginationState {
  @Description('Number of rows per page')
  @Property()
  @Default(20)
  pageSize: number = 20

  @Description('The page number that the user is on')
  @Property()
  @Default(0)
  pageIndex: number = 0
}
