import { Property } from '@tsed/schema'

export class TableSetActionToolbarVisibilityOperationOptions {
  @Property()
  targetKey: string

  @Property()
  enableTopToolbar: boolean | string

  @Property()
  enableBottomToolbar: boolean | string
}
