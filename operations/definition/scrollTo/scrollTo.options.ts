import { Default, Description, Enum, Optional } from '@tsed/schema'

export class ScrollToOptions {
  @Optional()
  @Description('The key or path to the container we intend to target for an operation')
  targetKey?: string

  @Optional()
  @Description('Element to scroll to')
  targetElementKey?: string

  @Optional()
  @Default('start')
  @Description('Defines vertical alignment')
  @Enum('start', 'center', 'end', 'nearest')
  block?: 'start' | 'center' | 'end' | 'nearest' = 'start'

  @Optional()
  @Default('nearest')
  @Description('Defines horizontal alignment')
  @Enum('start', 'center', 'end', 'nearest')
  inline?: 'start' | 'center' | 'end' | 'nearest' = 'nearest'
}
