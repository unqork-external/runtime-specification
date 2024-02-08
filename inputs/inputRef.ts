import { Optional, Property, Required } from '@tsed/schema'

export class InputRef {
  @Required()
  targetKey: string

  @Property()
  propertyPath?: string

  @Optional()
  alias?: string
  @Optional()
  required?: boolean
  @Property()
  silent?: boolean
  @Property()
  type?: string
}
