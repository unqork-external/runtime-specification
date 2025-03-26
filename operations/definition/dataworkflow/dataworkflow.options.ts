import { Optional, Property } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class DataWorkflowOptions extends OperationOptions {
  @Optional()
  targetKey?: string
  @Optional()
  value?: unknown
  @Property()
  dwfInputs: DataWorkflowInputs
  @Property()
  outputs: DataWorkflowOutputs
  @Property()
  operators: DataWorkflowOperator[]
  @Property()
  isDebugMode: boolean
}

export type DataWorkflowInput = {
  id: string
  required?: boolean
  inputLabel?: string
  key?: number
  source?: 'Default' | 'Binded Table' | 'Group Input'
  // If we've explicitly defined the property to target via .property()
  // syntax, it's stored here
  property?: string
}

export type DataWorkflowOutput = {
  id: string
  outputLabel: string
  setValue?: unknown
  action: string
  value?: unknown
  [key: string]: unknown
}

export type DataWorkflowInputs = DataWorkflowInput[]

export type DataWorkflowOutputs = DataWorkflowOutput[]

export type DataWorkflowOperator = {
  dataOperation: string
  key: number
  label: string
  output1: null | string
  output2: null | string
  input1: null | string
  input2: null | string
  argument: null | string
  option1?: null | string
  option2?: null | string
  option3?: null | string
  option4?: null | string
  option5?: null | string
  inputList?: null | string
  dontSanitizeFormula?: boolean
  encodeHTML?: boolean
}
