import { Description } from '@tsed/schema'

@Description('The PackageModel describes how the Vega Runtime will resolve dependencies')
export class PackageModel {
  @Description('Type of package')
  type: string
  @Description('Version of package')
  version: string
  @Description('URL of package')
  url: string
}
