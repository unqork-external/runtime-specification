import { Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import { StandardArrayNestable } from '../../nestables'
import { DropdownOptionModel } from '../dropdown'

@DiscriminatorValue('complexJsonInput')
export class ComplexJsonInputComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'complexJsonInput' = 'complexJsonInput' as const

  @Property()
  display: Display = new Display()

  @Property()
  @Description('The type of the value component selected in the dropdown.')
  @Default('string')
  selectedType: string = 'string'

  @Property()
  @Description('A label used for the component.')
  @Default('')
  @Required()
  label: string = ''

  @Property()
  @Description('A Schemas to process and close in the array array use case.')
  @Default('')
  @Required()
  schemas: Record<string, any> = {}

  @Property()
  @Description('Flag designated to indicate the array case.')
  @Default(false)
  @Required()
  isArray: boolean = false

  @Property()
  @Description('Flag designated to indicate the initial component has be set up.')
  @Default(false)
  initialComponentSetup: boolean = false

  @Property()
  @Description('The type options available to the dropdown.')
  @Default([])
  options: DropdownOptionModel[] = []

  @Description('Nestable information for the Complex Json Input component.')
  nestables = { childIds: new StandardArrayNestable() }
}

export class ComplexJsonInputComponentState extends ComplexJsonInputComponentDefinition {
  @Description('Children for nestable references.')
  children: string[] = []

  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
