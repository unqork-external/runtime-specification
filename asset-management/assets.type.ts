export type Dependencies = Record<string, string>
export type DependenciesMeta = Record<string, { global: boolean }>
export type VersionInfo = {
  name: string
  description?: string
  version: string
  size: number
  dependencies?: Dependencies
  dependenciesMeta?: DependenciesMeta
}
export type UnqorkAsset = {
  name: string
  description?: string
  version: string
  dependencies?: Dependencies
  renderer?: RendererInfo
  webComponent?: VersionInfo
  container?: VersionInfo
}
export type RendererInfo = VersionInfo & {
  rendererType?: string
}
export interface ContainerConfig {
  name: string
  version: string
}
export type ComponentAssetMapping = {
  unqorkComponentType: string
  assetName: string
  assetVersion: string
}
