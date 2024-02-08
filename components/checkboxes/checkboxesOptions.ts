import { CollectionOf, Default, Description, Enum, Example, Property, Required } from '@tsed/schema'

export enum CheckboxesOptionType {
  VALUE = 'value',
  SELECT_ALL = 'selectAll',
  OTHER = 'other',
  NONE = 'none',
}

export class CheckboxesOptionModel {
  @Required()
  @Description('Option label')
  label: string

  @Enum(CheckboxesOptionType)
  @Description('Option Type')
  type: CheckboxesOptionType

  @Required()
  @Description('Option Value')
  value: string
}

export class CheckboxesTransformOptions {
  @Required()
  @Default('value')
  @Description('Location of value.')
  valueLocation = 'value'

  @Required()
  @Default('label')
  @Description('Location of label.')
  labelLocation = 'label'
}

export class CheckboxesReferenceKeyModel {
  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string

  @Required()
  @Description('Location of value and label.')
  @Example({ valueLocation: 'value', labelLocation: 'label' })
  transformOptions: CheckboxesTransformOptions = new CheckboxesTransformOptions()
}

export class CheckboxesOptions {
  @Description('Any custom CSS classes to apply to the component.')
  customClass: string

  @Description('Data reference key settings for the checkboxes.')
  referenceKey?: CheckboxesReferenceKeyModel

  @Default(false)
  @Description('Used in renderer - Is None checkbox toggled on')
  isNoneChecked: boolean = false

  @Default(false)
  @Description('Used in renderer - Is Other checkbox toggled on')
  isOtherChecked: boolean = false

  @Default(false)
  @Description('Used in renderer - Is Select All checkbox toggled on')
  isSelectAllChecked: boolean = false

  @Description('Label property for data reference')
  labelProperty?: string

  @Default('None of the above')
  @Description('Label for none checkbox')
  noneLabel: string = 'None of the above'

  @Default('None')
  @Description('Value for none checkbox')
  noneValue: string = 'None'

  @Description('Key used to point to for the other checkbox')
  otherComponentKey?: string

  @Default('Other')
  @Description('Label for other checkbox')
  otherLabel: string = 'Other'

  @Default('other')
  @Description('Value for other checkbox')
  otherValue: string = 'other'

  @Default('Select All')
  @Description('Label for select all checkbox')
  selectAllLabel: string = 'Select All'

  @Default(false)
  @Description('Show none checkbox')
  showNone?: boolean = false

  @Default(false)
  @Description('Show other checkbox')
  showOther?: boolean = false

  @Default(false)
  @Description('Show select all checkbox')
  showSelectAll?: boolean = false

  @Description('Value property for data reference source')
  valueProperty?: string

  @CollectionOf(CheckboxesOptionModel)
  @Description('Values from the data source')
  values: CheckboxesOptionModel[] = []

  @CollectionOf(CheckboxesOptionModel)
  @Description('Initial values from the data source')
  initial?: CheckboxesOptionModel[]

  @Property()
  @Description(
    "If true, 'options' exist at the top level of submission data, pointing to the boolean value of their selection status",
  )
  promoteDataToTopLevel: boolean = false
}
