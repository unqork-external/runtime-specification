import type { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component may have its own "components" property
 */
export interface ComponentWithComponents extends BaseComponentDefinition {
  components?: BaseComponentDefinition[]
  // For some reason, MUIBasicTable named these rowComponents instead
  rowComponents?: BaseComponentDefinition[]
}
