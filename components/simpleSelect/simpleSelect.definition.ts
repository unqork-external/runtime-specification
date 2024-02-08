import { CollectionOf, Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { OptionNestable } from './optionNestable'
import { SelectedOptionsNestable } from './selectedOptionsNestable'
import { SimpleSelectField } from './simpleSelectField'
import { SimpleSelectSimpleViewModel } from './simpleSelectSimpleView.model'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('simpleSelect')
export class SimpleSelectComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'simpleSelect' = 'simpleSelect' as const

  @Property()
  @Default(false)
  useSimpleView?: boolean = false

  @Property()
  simpleView: SimpleSelectSimpleViewModel

  @Property()
  display: Display = new Display()

  @Property(SimpleSelectField)
  @Description('Field settings of the simpleSelect component.')
  field: SimpleSelectField = new SimpleSelectField()

  @CollectionOf(BaseComponentDefinition)
  @Description('Nested option component definition.')
  options?: BaseComponentDefinition[] = []

  @Description('Fully qualified child keys for options nestables. Maintained by nestable api.')
  optionKeys?: string[] = []

  @CollectionOf(BaseComponentDefinition)
  @Description('Nested selected option component definitions')
  selectedOptions?: BaseComponentDefinition[] = []

  @Description('Fully qualified child keys for selectedOptions nestables. Maintained by nestable api.')
  selected?: string[] = []

  @Description('Nestable definitions for simpleSelect component')
  nestables = {
    optionKeys: new OptionNestable(),
    selected: new SelectedOptionsNestable(),
  }

  @Description('Value of the simpleSelect')
  declare value?: string[] | null
}
