import { Description } from '@tsed/schema'

export class MenuToggleAtOptions {
  @Description('a string that represents an object in runtime state')
  targetKey: string

  @Description('Which element should we anchor this menu to?')
  anchorKey: string
}
