import { Adornments } from '../../adornments'
import { NestableDef } from '../../nestables'
import { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component has display settings in its configuration
 */
export interface ComponentWithAdornments extends BaseComponentDefinition {
  adornments?: Adornments<any>
  nestables?: NestableDef
}
