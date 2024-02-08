import { Required, Optional, Property } from '@tsed/schema'

// TODO Add descriptions when the use case is clear.
export class WorkflowValidationErrors {
  @Property()
  validationMode?: boolean

  @Property()
  errors: Record<string, WorkflowValidationError[]>
}

// TODO Add descriptions when the use case is clear.
export class WorkflowValidationError {
  @Required()
  id: string

  @Required()
  path: string

  @Required()
  label: string

  @Optional()
  parent: string

  @Required()
  message: string
}
