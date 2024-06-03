import type { Display } from '../../component-composition/display/component.display'
import type { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component has display settings in its configuration
 */
export interface ComponentWithDisplay extends BaseComponentDefinition {
  display?: Display
}
