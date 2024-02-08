import { Property } from '@tsed/schema'

export interface WatcherConfig {
  watchers: Watcher[]
}

export class Watcher {
  @Property()
  id: string
  @Property()
  inputs: WatcherInput[]
  @Property()
  debounceTimeInMS?: number
}

export class WatcherInput {
  @Property()
  targetKey: string
  @Property()
  alias?: string
  @Property()
  required?: boolean
  @Property()
  propertyPath?: string
}
