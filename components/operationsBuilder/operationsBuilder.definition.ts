import { Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('operationsBuilder')
export class OperationsBuilderComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'operationsBuilder' = 'operationsBuilder' as const
  visible: boolean = false
  eventKeys?: string[]
  operationKeys?: string[]
  currentEvent?: string
  currentOperationKey?: string
  operationsComponentsMap?: Record<string, any>
  currentOperation: Record<string, any> = {}

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information for operations builder')
  nestables = { childIds: new StandardArrayNestable() }

  @Optional()
  declare signals: SignalTargets<OpsBuilderTargets>
}
