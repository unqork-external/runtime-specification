import { CollectionOf, Const, Default, Description, DiscriminatorValue, MapOf, Optional, Property } from '@tsed/schema'

import { DndSwimlanesField } from './dndSwimlanes.field'
import { DndSwimlanesNestables } from './dndSwimlanes.nestables'
import { DndSwimlanesOptions } from './dndSwimlanes.options'
import { DndSwimlanesStyling } from './dndSwimlanes.styling'
import { DndSwimlanesTargets } from './dndSwimlanes.targets.enum'
import { DND_SWIMLANES_ITEM_ID, DndSwimlanesItem } from './item/dndSwimlanesItem.definition'
import { DndSwimlanesLane } from './lane/dndSwimlanesLane.definition'
import { DndSwimlanesLayouts } from './layouts/dndSwimlanesLayouts.definition'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('dndSwimlanes')
@ViewTargets(DndSwimlanesTargets)
export class DndSwimlanesComponentDefinition extends BaseComponentDefinition {
  @Const('dndSwimlanes')
  type: 'dndSwimlanes' = 'dndSwimlanes' as const

  @Optional()
  field: DndSwimlanesField = new DndSwimlanesField()

  @Optional()
  display: Display = new Display()

  @Optional()
  options: DndSwimlanesOptions = new DndSwimlanesOptions()

  @Optional()
  @Default({})
  @MapOf(DndSwimlanesItem)
  @TrimmedDescription(`
    The items that are inside the swimlanes. 
    This can be used to add, remove, or update a swimlane item.
    If the value prop is set, this will be automatically updated reflect the data in value.
  `)
  items: Record<DND_SWIMLANES_ITEM_ID, DndSwimlanesItem> = {}

  @Optional()
  @Default([])
  @CollectionOf(DndSwimlanesLane)
  @Description('The lanes which will contain the swimlanes items')
  lanes: DndSwimlanesLane[] = []

  @Optional()
  layouts: DndSwimlanesLayouts = new DndSwimlanesLayouts()

  @Optional()
  @Default([])
  @CollectionOf(BaseComponentDefinition)
  @Description('A collection of child components to be displayed when the lane is empty.')
  placeholderComponents: BaseComponentDefinition[] = []

  @Property()
  nestables: DndSwimlanesNestables = new DndSwimlanesNestables()

  @Property()
  rows: string[] = []

  @Property()
  placeholder: string[] = []

  @Optional()
  @Default([])
  @TrimmedDescription(`
    A flat array of data attributes for each item in the swimlanes. 
    These are organized from top to bottom and from left to right.
  `)
  value: Record<string, unknown>[] = []

  @Optional()
  declare signals?: SignalTargets<DndSwimlanesTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: DndSwimlanesStyling
}
