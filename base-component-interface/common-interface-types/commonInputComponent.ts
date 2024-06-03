import type { Display } from '../../component-composition/display/component.display'
import type { Field } from '../../component-composition/field/component.field.label'
import type { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component has display settings in its configuration
 */
export interface CommonInputComponent extends BaseComponentDefinition {
  display?: Display
  field?: Field
}
