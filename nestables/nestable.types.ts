import { Description, Example, Optional, Property, Required } from '@tsed/schema'

export enum NestableType {
  ARRAY = 'array',
  MATRIX = 'matrix',
}

export class Nestable {
  @Required()
  @Property()
  @Description('The name of the property on the parent that references its children by key or ID.')
  @Example('childIds')
  propertyName: string

  @Required()
  @Property()
  @Description(`States whether the property referencing nested objects should resolve to an array or a matrix.`)
  type: NestableType

  @Optional()
  @Property()
  @Description('Points to the property where the child definitions can be found.')
  children?: string = 'components'

  // TODO: Iterate on this key for creating a way to extract children values to watch for.
  // @Property()
  // watchFor?: string = 'value'
}
