import { CollectionOf, Default, Description, Optional } from '@tsed/schema'

import { CheckboxesOptionModel } from './checkboxes.option.model'
import { CheckboxesReferenceKeyModel } from './checkboxes.referenceKey.model'

@Description('Options which are taken from the data source')
export class CheckboxesOptions {
  @Optional()
  @Description('Any custom CSS classes to apply to the component.')
  customClass?: string

  @Optional()
  @Description('Data reference key settings for the checkboxes.')
  referenceKey?: CheckboxesReferenceKeyModel

  @Optional()
  @Default(false)
  @Description('Used in renderer - Is None checkbox toggled on')
  isNoneChecked: boolean = false

  @Optional()
  @Default(false)
  @Description('Used in renderer - Is Select All checkbox toggled on')
  isSelectAllChecked: boolean = false

  @Optional()
  @Description('Label property for data reference')
  labelProperty?: string

  @Optional()
  @Default('None of the above')
  @Description('Label for none checkbox')
  noneLabel: string = 'None of the above'

  @Optional()
  @Default('None')
  @Description('Value for none checkbox')
  noneValue: string = 'None'

  @Optional()
  @Default('Select All')
  @Description('Label for select all checkbox')
  selectAllLabel: string = 'Select All'

  @Optional()
  @Default(false)
  @Description('Show none checkbox')
  showNone: boolean = false

  @Optional()
  @Default(false)
  @Description('Show select all checkbox')
  showSelectAll: boolean = false

  @Optional()
  @Description('Value property for data reference source')
  valueProperty?: string

  @Optional()
  @CollectionOf(CheckboxesOptionModel)
  @Default([])
  @Description('Values from the data source')
  values: CheckboxesOptionModel[] = []

  @Optional()
  @CollectionOf(CheckboxesOptionModel)
  @Description('Initial values from the data source')
  initial?: CheckboxesOptionModel[]

  @Optional()
  @Default(false)
  @Description(
    "If true, 'options' exist at the top level of submission data, pointing to the boolean value of their selection status",
  )
  promoteDataToTopLevel: boolean = false
}
