import { Optional, Property } from '@tsed/schema'

export class DataWorkflowOptions {
  @Optional()
  targetKey?: string
  @Optional()
  value?: unknown
  @Property()
  inputs: DataWorkflowInputs
  @Property()
  outputs: DataWorkflowOutputs
  @Property()
  operators: DataWorkflowOperator[]
  @Property()
  isDebugMode: boolean
}

export type DataWorkflowInput = {
  id: string
  required: boolean
  inputLabel?: string
  key?: number
  source?: 'Default' | 'Binded Table' | 'Group Input'
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
