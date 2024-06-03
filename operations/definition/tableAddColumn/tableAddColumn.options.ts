import { CollectionOf, Description, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../../base-component-interface'
export class TableAddColumnOperationOptions {
  @Description(
    'A unique string identifier used to specify the particular table ' +
      'or component in the application where the column addition operation is to be executed',
  )
  @Property()
  targetKey: string

  @Description('The component definition to be added to the target table ')
  @Property()
  @CollectionOf(() => BaseComponentDefinition)
  definitions: BaseComponentDefinition[]

  @Description('Specifies whether the component is a Vega component')
  @Property()
  isVega: boolean
}
