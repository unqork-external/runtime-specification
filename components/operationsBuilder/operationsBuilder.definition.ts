import { Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { OpsBuilderStyling } from './operationsBuilder.styling'
import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { MultiSelectOptionModel } from '../multiSelect'

@DiscriminatorValue('operationsBuilder')
@ViewTargets(OpsBuilderTargets)
export class OperationsBuilderComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'operationsBuilder' = 'operationsBuilder' as const
  visible: boolean = false
  eventKeys?: string[]
  operationKeys?: string[]
  selectedEvent?: string
  currentEvent?: string
  selectedOperation?: MultiSelectOptionModel
  currentOperationKey?: string
  operationsComponentsMap: Record<string, any>
  operationsDescriptionsMap: Record<string, any>
  currentOperation: Record<string, any> = {}
  editMode: boolean = false
  operationIndex: number = -1

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information for operations builder')
  nestables = { childIds: new StandardArrayNestable() }

  @Optional()
  declare signals: SignalTargets<OpsBuilderTargets>

  @Examples(targetedStylingExample)
  declare styling: OpsBuilderStyling

  @Default(false)
  useDefaultStyles: boolean = false

  @Default(false)
  showCloseButton: boolean = false
}
