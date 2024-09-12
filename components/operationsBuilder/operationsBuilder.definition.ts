import { CollectionOf, Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { OpsBuilderStyling } from './operationsBuilder.styling'
import { OperationsBuilderOperation } from './operationsBuilderOperation'
import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { SignalOption } from './signalOption'
import { signalOptionsExamples } from './signalOption.example'
import { TrimmedDescription, ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import { OperationTypes } from '../../operations'
import { signalExamples, type Signal, type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { MultiSelectOptionModel, multiSelectOptionModelExamples } from '../multiSelect'

@DiscriminatorValue('operationsBuilder')
@TrimmedDescription(`
  The Operations Builder component provides ability to configure Events and Operations on individual components.
  `)
@ViewTargets(OpsBuilderTargets)
export class OperationsBuilderComponentDefinition extends BaseComponentDefinition {
  @Const('operationsBuilder')
  type: 'operationsBuilder' = 'operationsBuilder' as const

  @Required()
  @Default(false)
  visible: boolean = false

  @Default([])
  @Required()
  @CollectionOf(SignalOption)
  @Description('List of event types in dropdown list')
  @Examples(signalOptionsExamples)
  signalTypes: SignalOption[] = []

  @Default([])
  @Required()
  @CollectionOf(SignalOption)
  @Description('List of initial event types')
  @Examples(signalOptionsExamples)
  initialSignalTypes: SignalOption[] = []

  @Optional()
  @Description('The selected signal in Signals or Events dropdown')
  selectedSignal?: MultiSelectOptionModel

  @Optional()
  @Description('Event selected from Events list')
  currentSignal?: Signal

  @Optional()
  @Description(`The schema for selection operation's options`)
  currentOperation?: Record<string, any>

  @Optional()
  @Description('The selected operation type that is being actively configured')
  currentOperationKey?: string

  @Required()
  @Description('A map of all operations and their schemas, definitions, descriptions, and stability')
  operationsMap: Record<keyof typeof OperationTypes, OperationsBuilderOperation>

  @Optional()
  @Description('The selected operation in Operations dropdown')
  @Examples(multiSelectOptionModelExamples)
  selectedOperation?: MultiSelectOptionModel

  @Required()
  @Default(false)
  @Description('Indicates that an operation is being edited and is an existing operation')
  editMode: boolean = false

  @Required()
  @Default(-1)
  @Description('Index of the operation being edited')
  operationIndex: number = -1

  @Optional()
  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information for operations builder')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Value of the Ops Builder component. Ops Builder always stores its data as a JSON object.')
  @Examples(signalExamples)
  declare value: SignalTargets<OpsBuilderTargets>

  @Examples(targetedStylingExample)
  declare styling: OpsBuilderStyling

  @Optional()
  @Default(false)
  @Description('Indicates whether to allow styles directly defined in the component')
  useDefaultStyles: boolean = false

  @Optional()
  @Default(false)
  @Description('Show or Hide the Close button')
  showCloseButton: boolean = false

  @Optional()
  @Default(false)
  @Description('Sets Operations Builder to be in Readonly mode')
  readOnly: boolean = false
}
