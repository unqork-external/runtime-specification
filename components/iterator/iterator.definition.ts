import { Required, DiscriminatorValue, Property, Description, Default, CollectionOf, Optional } from '@tsed/schema'

import { IteratorField } from './iteratorField'
import { IteratorOptions } from './iteratorOptions'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Nestable, NestableType } from '../../nestables'
import type { SignalTargets } from '../../signals'

// Valid data types for a row
export type IteratorRowData = string | number | boolean | null | object | Date | IteratorRow

/**
 * This is not exact representation of iterator values
 * It's store hidden "components" that creates nested children from it!!!!
 */
export type IteratorRow = {
  [key: string]: IteratorRowData
} & {
  // private property to maintain the order in the original recursive structure
  __index?: number
}

export type IteratorDisplayRow = {
  id: string
  children?: IteratorDisplayRows
  showChildren: boolean
}

export type IteratorDisplayRows = IteratorDisplayRow[]

@DiscriminatorValue('iterator')
export class IteratorComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'iterator' = 'iterator' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  display: Display = new Display()

  @Property(IteratorField)
  field: IteratorField = new IteratorField()

  @Property(IteratorOptions)
  options: IteratorOptions = new IteratorOptions()

  @Default([])
  @Description('The values that will be iterated over')
  value: IteratorRow[] = []

  @Description('Standard nestable implementation')
  nestables = { rows: new RowsNestable() }

  @Default([])
  @Description('Child IDs for nestable references')
  rows: string[] = []

  @Default([])
  @Description('Nested child IDs for rendering')
  displayRows: IteratorDisplayRow[] = []

  @Optional()
  // Iterator only has signals.root to dispatch onRowUpdatedDefault in container
  // Iterator does not merge Ops Builder signals
  declare signals?: SignalTargets<'root'>
}

class RowsNestable extends Nestable {
  @Property()
  propertyName: string = 'rows'

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'components'
}
