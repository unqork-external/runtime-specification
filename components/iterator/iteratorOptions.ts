import { Default, Description, Optional } from '@tsed/schema'

export class IteratorOptions {
  @Default('$item')
  @Description('Unique property key that will be available to the scope of the descendants')
  itemKey: string = '$item'

  @Optional()
  @Description('The property ID of the component to get data from.')
  referenceKey?: string

  @Optional()
  @Description('The IteratorRow property denoting nested IteratorRows.')
  nestedProperty?: string
}
