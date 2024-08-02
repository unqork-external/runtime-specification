import { Description, Default, Optional } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ClearQueryParametersOperationOptions extends OperationOptions {
  @Description(
    'Determines if changing the params should cause the page to redirect to the url with the new query parameters.',
  )
  @Default(false)
  @Optional()
  redirect?: boolean = false

  @Description(
    'Determines the location in which this operation will update query parameters. Either in the default location as specified by RFC 3968 Section 3.4, or appended to in the URL fragment (RFC 3968 Section 3.5).',
  )
  @Default('default')
  @Optional()
  queryParamLocation?: 'default' | 'fragment' = 'default'
}
