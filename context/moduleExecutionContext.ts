import type { ComponentAssetMapping, UnqorkAsset, VersionInfo } from '../asset-management'
import type { ModuleDefinition } from '../modules'

// TODO In the future the spec shouldn't require the direct API response (execution context).
//  We should transform it into what we want for the spec and come up with a better way to download assets.
export class ModuleExecutionContext {
  moduleDefinition: ModuleDefinition
  assets?: UnqorkAsset[]
  componentAssetMappings?: ComponentAssetMapping[]
  dependencies?: VersionInfo[]
}
