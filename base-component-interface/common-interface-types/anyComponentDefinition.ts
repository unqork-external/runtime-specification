import type { BaseComponentDefinition } from '../base.component.definition'

// Useful anytime you want to say "this property could be any component definition"
// Only type checks against the core base properties, but allows you to pass in components with additional
// properties wihtout getting a TS error
export type AnyComponentDefinition = BaseComponentDefinition & Record<string, unknown>
