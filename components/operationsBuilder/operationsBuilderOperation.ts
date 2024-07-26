import { CollectionOf, Description, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface'

export class OperationsBuilderOperation {
  @CollectionOf(BaseComponentDefinition)
  @Description('Component definitions for the fields that should render for the operation')
  @Required()
  fields: BaseComponentDefinition[]

  @Description('Description for the operation')
  @Required()
  description: string

  @Description('Stability level for the operation')
  @Required()
  isStable: boolean

  @Description('Reference key for the operation schema')
  @Required()
  definition: string
}
