import { OperationsArray } from '../../modules/operationsArray.definition'

export class WatcherEvents {
  [key: `WATCHER_${string}`]: OperationsArray
}
