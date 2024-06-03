import type { StylingModel } from '../../styling'
import type { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component leverages "styling"
 */
export interface ComponentWithStyling extends BaseComponentDefinition {
  styling: StylingModel<any>
}
