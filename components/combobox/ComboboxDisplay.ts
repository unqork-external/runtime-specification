import { Default, Description, Optional } from '@tsed/schema'

import { Display } from '../../component-composition'

export class ComboboxDisplay extends Display {
  @Optional()
  @Description('Whether to show a loading state instead of "No Options". Useful when loading data externally.')
  @Default(false)
  loading? = false
}
