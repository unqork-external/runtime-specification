import { Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { OpsBuilderStyling } from './operationsBuilder.styling'
import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import type { Signal, SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { MultiSelectOptionModel } from '../multiSelect'

@DiscriminatorValue('operationsBuilder')
@ViewTargets(OpsBuilderTargets)
export class OperationsBuilderComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'operationsBuilder' = 'operationsBuilder' as const

  @Required()
  @Default(false)
  visible: boolean = false

  @Default([])
  @Required()
  @Description('List of signal types in dropdown list')
  signalTypes: MultiSelectOptionModel[] = []

  @Default([])
  @Required()
  @Description('List of initial signal types')
  initialSignalTypes: MultiSelectOptionModel[] = []

  @Default([])
  @Optional()
  @Description('List of operation types')
  operationKeys?: string[] = []

  @Optional()
  @Default('')
  @Description('Type of the signal selected from the Signals or Events dropdown')
  selectedSignalType: string = ''

  @Optional()
  @Description('Signal selected from Signals or Events list')
  currentSignal?: Signal

  @Optional()
  @Default({})
  @Description(`The schema for selection operation's options`)
  currentOperation: Record<string, any> = {}

  @Default('')
  @Description('The selected operation type that is being actively configured')
  currentOperationKey: string = ''

  @Required()
  @Description('A map of all operations and their schemas')
  operationsComponentsMap: Record<string, any>

  @Required()
  @Description('A map of all operations and their descriptions')
  operationsDescriptionsMap: Record<string, any>

  @Required()
  @Description('A map of all operations and their level of stability')
  operationsStabilityMap: Record<string, any>

  @Optional()
  @Description('The selected operation in Operations dropdown')
  selectedOperation?: MultiSelectOptionModel

  @Required()
  @Default(false)
  @Description('Indicates that an operation is being edited and is an existing operation')
  editMode: boolean = false

  @Required()
  @Default(-1)
  @Description('Index of the operation being edited')
  operationIndex: number = -1

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information for operations builder')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Value of the Ops Builder component. Ops Builder always stores its data as a JSON object.')
  declare value: SignalTargets<OpsBuilderTargets>

  @Examples(targetedStylingExample)
  declare styling: OpsBuilderStyling

  @Required()
  @Default(false)
  @Description('Indicates whether to allow styles directly defined in the component')
  useDefaultStyles: boolean = false

  @Optional()
  @Default(false)
  @Description('Show or Hide the Close button')
  showCloseButton: boolean = false
}
