import { Description } from '@tsed/schema'

export class ColumnState {
  @Description('boolean to handle showing or hiding column filters')
  showColumnFilters: boolean = false
}
