import { Description, Ignore, Optional, Property, Required } from '@tsed/schema'

@Description(
  `Inputs can be used to utlize dynamic values from other state within the runtime
  within a particular execution of an operation`,
)
export class InputRef {
  @Description('Key of target this input depends on')
  @Required()
  targetKey: string

  @Description('Path to property on target to resolve')
  @Property()
  propertyPath?: string

  @Description('Optionally alias resolved value for use in formulas')
  @Optional()
  alias?: string

  @Description("If true, operation won't execute if targeted property has no value")
  @Optional()
  required?: boolean

  @Description('Not used in later formulas, only used to determine if operation should execute')
  @Property()
  silent?: boolean

  // What does this do??
  @Property()
  @Ignore()
  type?: string
}

export class ResolvedInputRef extends InputRef {
  @Description('Resolved value for this input')
  value: any
}
