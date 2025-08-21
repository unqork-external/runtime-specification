import { CollectionOf, Description, MapOf, Property, Required } from '@tsed/schema'

import { ModuleExecutionContext } from './context/moduleExecutionContext'
import { RouteDefinition } from './routes'

export class RuntimeSpecification {
  @Description(' A map containing route definitions for the runtime router.')
  @MapOf(() => RouteDefinition)
  routes?: Record<string, RouteDefinition>

  @Description('A collection of module definitions.')
  @Required()
  @CollectionOf(ModuleExecutionContext)
  modules: ModuleExecutionContext[]

  @Property()
  isR2?: boolean
}
