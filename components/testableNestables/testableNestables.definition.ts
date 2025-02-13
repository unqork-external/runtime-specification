import { CollectionOf, Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { TestableNestablesNestables } from './testableNestables.nestables'
import { TestableNestablesStyling } from './testableNestables.styling'
import { TestableNestablesTargets } from './testableNestablesTargets.enum'
import { TrimmedDescription, ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import { NestableType } from '../../nestables'
import type { SignalTargets } from '../../signals'

@TrimmedDescription(`
  The Testable Nestables component is a barebones "nestables" component created to isolate and test "nestables" functionality.
`)
@DiscriminatorValue('testableNestables')
@ViewTargets(TestableNestablesTargets)
export class TestableNestablesComponentDefinition extends BaseComponentDefinition {
  @Const('testableNestables')
  type: 'testableNestables' = 'testableNestables' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  @Default(NestableType.ARRAY)
  @Description('Current nestable type that the component should implement')
  nestableType: NestableType = NestableType.ARRAY

  @Optional()
  @Description('Array-style nestable data')
  nestables = new TestableNestablesNestables()

  @CollectionOf(BaseComponentDefinition)
  @Description('Child components for the array nestable')
  childrenInArray: BaseComponentDefinition[]

  @CollectionOf(BaseComponentDefinition)
  @Description('Single array structure that defines what a row within the matrix should look like')
  matrixRowStructure: BaseComponentDefinition[]

  @Optional()
  @Description('Two dimensional matrix data to add on component initialization')
  initialMatrixData?: Array<BaseComponentDefinition[]>

  @Optional()
  @Description('Data object to add to component as nestable children')
  addChildrenData?: BaseComponentDefinition[] | Array<BaseComponentDefinition[]>

  @Optional()
  declare styling?: TestableNestablesStyling

  @Optional()
  declare signals?: SignalTargets<TestableNestablesTargets>
}

export class TestableNestablesComponentState extends TestableNestablesComponentDefinition {
  @Required()
  @Description('Child ids for all array nestable references within the component.')
  arrayNestables: string[] = []

  @Required()
  @Description('Child ids for all matrix nestable references within the component.')
  matrixNestables: string[] = []
}
