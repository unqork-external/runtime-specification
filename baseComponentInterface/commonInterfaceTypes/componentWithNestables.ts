import { NestableDef } from '../../nestables'
import { BaseComponentDefinition } from '../base.component.definition'

/**
 * Type to leverage when expecting that a component is using the Nestables API
 */
export interface ComponentWithNestables extends BaseComponentDefinition {
  nestables?: NestableDef
}
