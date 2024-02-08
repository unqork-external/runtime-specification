import { Property } from '@tsed/schema'

export class DecideInputs {
  @Property()
  targetKey: string
  @Property()
  alias?: string
  // false / null mean the same thing
  @Property()
  required?: boolean
  @Property()
  silent?: boolean
  @Property()
  type?: string
  @Property()
  propertyPath?: string
}
