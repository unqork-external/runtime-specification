import { Description, Property } from '@tsed/schema'

export class TableRemoveColumnOperationOptions {
  @Description(
    'A unique string identifier used to specify the particular table ' +
      'or component in the application where the column removal operation is to be executed',
  )
  @Property()
  targetKey: string

  @Description('The column(s) to be removed from the target table ')
  @Property()
  keysToRemove: string | string[]
}
