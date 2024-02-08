import { Default, Optional, Required, Example, Description, Any } from '@tsed/schema'

export class ValidateOptions {
  @Required()
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('targetKey refers to the intended target to validate.')
  targetKey: string

  @Optional()
  @Default(false)
  @Description('If throwOnError is true and validation has failed. Stop execution for this operation chain.')
  throwOnError?: boolean = false

  @Optional()
  @Default(true)
  @Description('Skip validation when it is false.')
  shouldValidate?: boolean = true

  //TODO: Seperate the validate logic for Api call / value not in container
  @Optional()
  @Any()
  @Description('Value to be validated.')
  value?: unknown
}
