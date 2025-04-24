import { Description, Enum, Optional, Property, Required } from '@tsed/schema'

import { Field } from '../../component-composition/field/component.field.label'
import { InputSubLabel } from '../../component-composition/input/component.input'

export enum RadioDataSrc {
  None = 'None',
  DataReferenceKey = 'dataReferenceKey',
}

export class ValuesFromInput {
  @Description('The dataReferenceKey component ID to use for the Radio field')
  referenceKey: string

  @Description('The property to use for the Labels when using dataReferenceKey')
  labelProperty: string

  @Description('The property to use for the Values when using dataReferenceKey')
  valueProperty: string
}

export class RadioField extends Field {
  @Description('The data source for the radio component.')
  @Enum(RadioDataSrc)
  @Required()
  dataSrc: RadioDataSrc

  @Property()
  subLabel?: InputSubLabel = new InputSubLabel()

  @Optional()
  @Description('Tooltip for the input')
  tooltipDescription?: string

  @Description('Adds several new values to the component if dataSrc is not `None`')
  valuesFromInput: ValuesFromInput
}
