import { Default, Description } from '@tsed/schema'

export class DndSwimlanesOptions {
  @Default('$item')
  @Description('Unique property key that will be available to the scope of the descendants')
  itemKey: string = '$item'
}
