import { CollectionOf, Description, MapOf, Property, Required } from '@tsed/schema'

import type { ComponentAssetMapping, UnqorkAsset, VersionInfo } from './asset-management'
import type { ModuleDefinition } from './modules'
import { RouteDefinition } from './routes'
import { trimAll } from '../utilities'

// TODO In the future the spec shouldn't require the direct API
// response (execution context). We should transform it into
// what we want for the spec and come up with a better way to
// download assets.
class ModuleExecutionContext {
  moduleDefinition: ModuleDefinition
  assets?: UnqorkAsset[]
  componentAssetMappings?: ComponentAssetMapping[]
  dependencies?: VersionInfo[]
}

export class RuntimeSpecification {
  @Description(
    trimAll(`
    A map containing route definitions for the runtime router.
    `),
  )
  @MapOf(RouteDefinition)
  routes?: Record<string, RouteDefinition>

  @Description(
    trimAll(`
    A collection of module definitions.
    `),
  )
  @Required()
  @CollectionOf(ModuleExecutionContext)
  modules: ModuleExecutionContext[]

  @Property()
  isR2?: boolean
}
