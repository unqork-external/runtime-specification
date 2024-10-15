import { Const, Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { ComboboxStyling } from './combobox.styling'
import { ComboboxData } from './ComboboxData'
import { ComboboxDisplay } from './ComboboxDisplay'
import { ComboboxField } from './ComboboxField'
import { ComboboxIcon } from './ComboboxIcon'
import { ComboboxTargets } from './comboboxTargets.enum'
import { ViewTargets } from '../../../decorators'
import { OneOrMany } from '../../../decorators/schema/oneOrMany.decorator'
import {
  BaseComponentDefinition,
  CommonSimpleViewModel,
  type ComponentWithSimpleView,
} from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('combobox')
@ViewTargets(ComboboxTargets)
export class ComboboxComponentDefinition extends BaseComponentDefinition implements ComponentWithSimpleView {
  @Const('combobox')
  type: 'combobox' = 'combobox' as const

  @Required()
  @Description('Data for the Combobox options.')
  data: ComboboxData

  @Required()
  @Description('Display configuration for the Combobox.')
  display: ComboboxDisplay

  @Required()
  @Description('Field configuration for the Combobox.')
  field: ComboboxField

  @Optional()
  @Property(ComboboxIcon)
  @Description('Icon to display on the leading side of the Combobox.')
  icon?: ComboboxIcon

  @Optional()
  @Description('Read-only value of the search input as the user modifies it.')
  searchValue?: string

  @Optional()
  @Description('Simple view configuration.')
  simpleView? = new CommonSimpleViewModel()

  @Optional()
  @Description('Map of customized CSS styling for specific targets.')
  styling?: ComboboxStyling

  @Optional()
  @Description('Map of signals configuration for specific targets.')
  signals?: SignalTargets<ComboboxTargets>

  @Optional()
  @Description('Simple view state.')
  @Default(false)
  useSimpleView? = false

  @Optional()
  @Description('Value for the Combobox. `string` if field.multiple is disabled, `Array<sting>` if it is enabled.')
  @OneOrMany('string')
  value: string | string[]
}
