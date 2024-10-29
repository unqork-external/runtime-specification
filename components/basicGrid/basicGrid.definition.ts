import { Any, CollectionOf, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition/display/component.display'
import { Nestable, NestableDef, NestableType } from '../../nestables'

@DiscriminatorValue('basicgrid')
export class BasicGridComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'basicgrid' = 'basicgrid' as const

  @Property(Display)
  display: Display = new Display()

  @Property()
  initialData: object[]

  @Property()
  groupBy: string[]

  @Property()
  columnHeaders: string[]

  @CollectionOf(BaseComponentDefinition)
  columnComponents: BaseComponentDefinition[]

  @CollectionOf(BaseComponentDefinition)
  rowComponents: BaseComponentDefinition[]

  @Property()
  columns: string[] = []

  @Property()
  rows: string[] = []

  @Property()
  nestables = new BasicGridNestables()

  @Any()
  declare value: object[] | { update: object[] }
}

export class BasicGridNestables extends NestableDef {
  @Property()
  columns = new ColumnNestables()

  @Property()
  rows = new RowNestables()
}

export class ColumnNestables extends Nestable {
  @Property()
  propertyName: string = 'columns'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Property()
  children: string = 'columnComponents'
}

export class RowNestables extends Nestable {
  @Property()
  propertyName: string = 'rows'

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'rowComponents'

  watchFor?: string = 'value'
}
