import { Display } from '../../componentComposition/display/component.display'
import { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component has display settings in its configuration
 */
export interface ComponentWithDisplay extends BaseComponentDefinition {
  display?: Display
}
