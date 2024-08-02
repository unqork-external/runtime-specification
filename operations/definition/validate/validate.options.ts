import { Default, Optional, Description, Any } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class ValidateOptions extends TargetedOperationOptions {
  @Optional()
  @Default(false)
  @Description('If throwOnError is true and validation has failed. Stop execution for this operation chain.')
  throwOnError?: boolean = false

  @Optional()
  @Default(true)
  @Description('Skip validation when it is false.')
  shouldValidate?: boolean = true

  @Optional()
  @Default(false)
  @Description(
    'When true, will also validate the children of all matches from `targetKey`, ignoring modals, hidden, and isolated components.',
  )
  validateChildren?: boolean = false

  @Optional()
  @Default(false)
  @TrimmedDescription(`When true, will ignore isolated components (i.e. panel modals) that are directly matched by the targetKey. By default, isolated
  components that are directly matched will be validated.`)
  ignoreDirectIsolated?: boolean = false

  //TODO: Separate the validate logic for Api call / value not in container
  @Optional()
  @Any()
  @Description('Value to be validated.')
  value?: unknown
}
