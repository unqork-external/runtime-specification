import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import {
  AutoGenerationAnyExample,
  AutoGenerationBasicPropertyExample,
  AutoGenerationEnumExample,
  AutoGenerationMixedExample,
  AutoGenerationMixedObjectArrayExample,
  AutoGenerationObjectArrayExample,
  AutoGenerationObjectExample,
  AutoGenerationPrimitiveArrayExample,
} from '../../../examples/designerAutoGeneration/exampleDefinitions'
import { BaseComponentDefinition } from '../../base-component-interface'

@DiscriminatorValue('__autoGenerationExample')
export class AutoGenerationExampleComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: '__autoGenerationExample' = '__autoGenerationExample' as const

  @Property()
  basic: AutoGenerationBasicPropertyExample

  @Property()
  enum: AutoGenerationEnumExample

  @Property()
  object: AutoGenerationObjectExample

  @Property()
  mixed: AutoGenerationMixedExample

  @Property()
  any: AutoGenerationAnyExample

  @Property()
  primitiveArray: AutoGenerationPrimitiveArrayExample

  @Property()
  objectArray: AutoGenerationObjectArrayExample

  @Property()
  objectArrayMixed: AutoGenerationMixedObjectArrayExample
}
