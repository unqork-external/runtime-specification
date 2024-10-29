import { Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { ComplexJsonInputStyling } from './styling/complexJsonInput.styling'
import { ComplexJsonInputTargetsEnum } from './targets/complexJsonInputTargets.enum'
import { TrimmedDescription, ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display, Field, InputField } from '../../component-composition'
import { StandardArrayNestable } from '../../nestables'
import { type SignalTargets } from '../../signals'
import { Validation } from '../../validations'
import { MultiSelectOptionModel } from '../multiSelect'

@DiscriminatorValue('complexJsonInput')
@TrimmedDescription(`
  The Complex Json Input component is...
`)
@ViewTargets(ComplexJsonInputTargetsEnum)
export class ComplexJsonInputComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'complexJsonInput' = 'complexJsonInput' as const

  @Property()
  display: Display = new Display()

  @Description('The type of the value component selected in the dropdown.')
  @Default('string')
  selectedType: string = 'string'

  @Property()
  field: InputField = new InputField()

  @Description('A Schemas to process and close in the array array use case.')
  @Default('')
  @Required()
  schemas: Record<string, any> = {}

  @Description('Flag designated to indicate the array case.')
  @Default(false)
  @Required()
  isArray: boolean = false

  @Description('The type options available to the dropdown.')
  @Default([])
  options: MultiSelectOptionModel[] = []

  @Description('Nestable information for the Complex Json Input component.')
  nestables = { childIds: new StandardArrayNestable() }

  @Property()
  declare styling: ComplexJsonInputStyling

  @Property()
  declare signals: SignalTargets<ComplexJsonInputTargetsEnum>

  @Property()
  validation: Validation = new Validation()
}

export class ComplexJsonInputComponentState extends ComplexJsonInputComponentDefinition {
  @Description('Children for nestable references.')
  children: string[] = []

  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
