import type { BaseComponentDefinition } from '../base-component-interface/base.component.definition'
import type { Nestable } from '../nestables'

/**
 * Any component definition class that implements this interface
 * must provide an adornments key and a nestables key with the same
 * set of properties. That is, if a component has an adornment slot
 * named 'left', a nestable named 'left' must be present as well.
 */
export class Adornments<K extends string> {
  adornments?: Record<K, BaseComponentDefinition[]>
  nestables?: Record<K, Nestable>
}
