import { Description, Property } from '@tsed/schema'

export class TableAddColumnOperationOptions {
  @Description(
    'A unique string identifier used to specify the particular table ' +
      'or component in the application where the column addition operation is to be executed',
  )
  @Property()
  targetKey: string

  @Description('The component definition to be added to the target table ')
  @Property()
  definitions: object[]

  @Description('Specifies whether the component is a Vega component')
  @Property()
  isVega: boolean
}
