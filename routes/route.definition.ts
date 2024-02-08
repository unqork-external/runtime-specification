import { Description, Example, MapOf, Optional, Pattern, Required } from '@tsed/schema'

import { trimAll } from '../../utilities'
import { OperationsArray } from '../modules'

@Description(trimAll(`Route Definition Object`))
export class RouteDefinition {
  @Required()
  @Example('/home or /contact/:contactId')
  @Pattern(/^(\/:?[a-zA-Z0-9-_]+)+$/)
  @Description(
    trimAll(`
    The pattern used to match the current url. If the pattern for this route matches the
    current url, the module referenced by 'moduleId' will render in the configured 'slot'.
    The eventHandlers within this route definition will also apply.
    `),
  )
  pattern: string

  @Optional()
  @Example('651dcd49f453bd985b627d81')
  @Description(
    trimAll(`
    Module id corresponding to the module that should render when this route's pattern is matched.
    The module must already be loaded into the runtime. It will be rendered in the configured 'slot'.
  `),
  )
  moduleId?: string

  @Optional()
  @Example('Slot')
  @Description(
    trimAll(`
    Name of the slot in which the module for the route should render.
  `),
  )
  slot?: string

  @Optional()
  @Example({
    SUBMISSION_SAVED: {
      operations: [
        {
          type: 'SET_PROPERTY',
          options: {
            targetKey: 'component',
            property: 'foo',
            value: 'bar',
          },
        },
      ],
    },
  })
  @Description(
    trimAll(`
    Event handlers that will apply when this route is matched.
  `),
  )
  @MapOf(OperationsArray)
  eventHandlers: Record<string, OperationsArray>
}
