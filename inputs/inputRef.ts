import { Description, Optional, Property, Required } from '@tsed/schema'

@Description(
  'Objects may define other targets that they refer to. This becomes a link for operation execution within the Runtime.',
)
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

export class ResolvedInputRef extends InputRef {
  @Description('Resolved value for this input')
  value: any
}
