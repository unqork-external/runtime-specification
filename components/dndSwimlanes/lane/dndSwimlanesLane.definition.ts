import { CollectionOf, Default, Description, Optional, Required } from '@tsed/schema'

import { DND_SWIMLANES_ITEM_ID } from '../item/dndSwimlanesItem.definition'

export type DND_SWIMLANES_LANE_ID = string

export class DndSwimlanesLane {
  @Required()
  @Description('The id of the Swimlane.')
  laneId: DND_SWIMLANES_LANE_ID

  @Required()
  @Description('The name of the Swimlane displayed at the top.')
  name: string

  @Optional()
  @CollectionOf(String)
  @Description('The lanes where you can drag items from and drop here. If not defined, all lanes are allowed.')
  allowFrom?: DND_SWIMLANES_LANE_ID[]

  @Optional()
  @Default([])
  @CollectionOf(String)
  @Description('List of item ids that are inside this lane')
  items: DND_SWIMLANES_ITEM_ID[] = []
}
