export interface GeneralInput {
  targetKey: string
  propertyPath?: string
  alias?: string
  required?: boolean
}

export interface GeneralInputWithValue extends GeneralInput {
  value: any
}
