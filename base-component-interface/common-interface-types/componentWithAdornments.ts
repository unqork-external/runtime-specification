import type { Adornments } from '../../adornments'
import type { NestableDef } from '../../nestables'
import type { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component has display settings in its configuration
 */
export interface ComponentWithAdornments extends BaseComponentDefinition {
  adornments?: Adornments<any>
  nestables?: NestableDef
}
