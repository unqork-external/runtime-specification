import { Default, Description, Optional, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class RemoveQueryParametersOperationOptions extends OperationOptions {
  @Description('Parameters to remove from the URL')
  @Required()
  params: Array<string>

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
