import { CollectionOf, Description, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../../base-component-interface'
import { TargetedOperationOptions } from '../../interface'

export class TableAddColumnOperationOptions extends TargetedOperationOptions {
  @Description('The component definition(s) to be added to the target Table component')
  @Required()
  @CollectionOf(() => BaseComponentDefinition)
  definitions: BaseComponentDefinition[]

  @Description('Specifies whether the component is a Vega component')
  @Required()
  isVega: boolean
}
