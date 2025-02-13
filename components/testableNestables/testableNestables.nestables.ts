import { Description, Property } from '@tsed/schema'

import { Nestable, NestableDef, NestableType } from '../../nestables'

export enum NestablesId {
  ARRAY = 'arrayNestables',
  MATRIX = 'matrixNestables',
}

export class ArrayNestables extends Nestable {
  @Property()
  propertyName: string = NestablesId.ARRAY

  @Property()
  type: NestableType = NestableType.ARRAY

  @Property()
  children: string = 'childrenInArray'
}

export class MatrixNestables extends Nestable {
  @Property()
  propertyName: string = NestablesId.MATRIX

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'matrixRowStructure'
}

export class TestableNestablesNestables extends NestableDef {
  @Description('Array-style nestable data')
  arrayNestables = new ArrayNestables()

  @Description('Matrix-style nestable data')
  matrixNestables = new MatrixNestables()
}
