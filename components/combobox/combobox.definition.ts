import { CollectionOf, Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { ComboboxStyling } from './combobox.styling'
import { ComboboxData } from './ComboboxData'
import { ComboboxDisplay } from './ComboboxDisplay'
import { ComboboxField } from './ComboboxField'
import { ComboboxNestable } from './ComboboxNestable'
import { ComboboxTargets } from './comboboxTargets.enum'
import { ViewTargets } from '../../../decorators'
import { OneOrMany } from '../../../decorators/schema/oneOrMany.decorator'
import {
  BaseComponentDefinition,
  CommonSimpleViewModel,
  type ComponentWithSimpleView,
} from '../../base-component-interface'
import type { SignalTargets } from '../../signals'
import { IconComponentDefinition } from '../icon'

@DiscriminatorValue('combobox')
@ViewTargets(ComboboxTargets)
export class ComboboxComponentDefinition extends BaseComponentDefinition implements ComponentWithSimpleView {
  @Const('combobox')
  type: 'combobox' = 'combobox' as const

  @Optional()
  @Description('Child IDs for all nestable references within the component.')
  iconsKeys?: string[] = []

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
  @Description('Key of the icon to display on the leading side of the Combobox, as defined in the `icons` nestable.')
  iconKey?: string

  @CollectionOf(IconComponentDefinition)
  @Description('Children definition for all the icons used in this component.')
  icons?: IconComponentDefinition[] = []

  @Optional()
  @Description('Nestable configuration.')
  nestables? = new ComboboxNestable()

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
