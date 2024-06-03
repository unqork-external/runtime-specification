import { Default, Description, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { DndSwimlanesLayoutControls } from '../layouts/dndSwimlanesLayoutControls.definition'
import { DND_SWIMLANES_DEFAULT_LAYOUT_TYPE } from '../layouts/dndSwimlanesLayouts.definition'

export type DND_SWIMLANES_ITEM_ID = string

export class DndSwimlanesItem {
  @Required()
  @TrimmedDescription(`
    The data associated with the item.
    This will be synced with the item's position in the value property.
    When a card is moved to another lane, the grouping attribute will be updated to reflect the change.
    If a form field inside the layout changes, the data will reflect the new value of that field.
  `)
  data: Record<string, unknown>

  @Required()
  @Description('Unique id for the item.')
  itemId: DND_SWIMLANES_ITEM_ID

  @Optional()
  @Description('An accessible label for the item')
  label?: string

  @Required()
  layoutControls = new DndSwimlanesLayoutControls()

  @Optional()
  @Default(DND_SWIMLANES_DEFAULT_LAYOUT_TYPE)
  @Description('The layout type used for this card.')
  layoutType = DND_SWIMLANES_DEFAULT_LAYOUT_TYPE

  @Optional()
  @Description(`The nestable qualifier used to identify this item's layout.`)
  layoutId?: string

  @Optional()
  @Description('The current lane of the item.')
  laneId?: string
}
