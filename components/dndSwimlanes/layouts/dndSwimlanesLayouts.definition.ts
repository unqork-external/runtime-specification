import { AdditionalProperties, CollectionOf, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../../base-component-interface'

export const DND_SWIMLANES_DEFAULT_LAYOUT_TYPE = 'default'

export type DND_SWIMLANES_LAYOUT_TYPE = string

@AdditionalProperties(BaseComponentDefinition)
export class DndSwimlanesLayouts {
  @Required()
  @CollectionOf(BaseComponentDefinition)
  @TrimmedDescription(`
    The default set of components to render for a swimlane item.
    Other layouts can be added, but at least the default layout must be set. 
    This will be applied when no other layout fits the item. 
  `)
  [DND_SWIMLANES_DEFAULT_LAYOUT_TYPE]: BaseComponentDefinition[];

  [key: DND_SWIMLANES_LAYOUT_TYPE]: BaseComponentDefinition[]
}
