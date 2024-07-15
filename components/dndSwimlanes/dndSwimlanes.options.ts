import { Default, Description, Example, Optional } from '@tsed/schema'

import { DndSwimlanesDataAttributes } from './dndSwimlanes.dataAttributes.enum'
import {
  DndSwimlanesLayoutControlsDataAttributes,
  DndSwimlanesLayoutControlsInvertAttributes,
} from './layouts/DndSwimlanesLayoutControls.dataAttributes.enum'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

export class DndSwimlanesOptions {
  @Optional()
  @Default('$item')
  @Description('Unique property key that will be available to the scope of the descendants.')
  itemKey: string = '$item';

  @Optional()
  @Description('The data attribute used as the unique id of the swimlane item.')
  [DndSwimlanesDataAttributes.itemId]?: string;

  @Optional()
  @Description('The data attribute used as accessible name of the swimlane item.')
  @Example('name')
  [DndSwimlanesDataAttributes.label]?: string;

  @Optional()
  @TrimmedDescription(`
    Syncs an item's lane to a data attribute.
    This attribute's value will be updated as cards are moved between lanes.
    If this property is not set, you have to provide a laneId when you are adding an item or it will not show up.
  `)
  @Example('status', 'type')
  [DndSwimlanesDataAttributes.laneId]?: string;

  @Optional()
  @TrimmedDescription(`
    Syncs an item's layoutType to a data attribute.
    The value of this attribute should map to a layout in the layouts property.
    If not provided or if the attribute's value does not have a corresponding layout, the 'default' layout will be used.
    If not provided, the item's layoutType can be changed by setting 'items[itemId].layoutType'.
  `)
  [DndSwimlanesDataAttributes.layoutType]?: string;

  @Optional()
  @TrimmedDescription(`
    Syncs an item's interactive state to a data attribute.
    When the value of this attribute is false the item will have a disabled appearance, will not be draggable, and all child components will be non-interactive. 
    If not provided, an item will be interactive by default and can be toggled by setting 'items[itemId].layoutControls.interactive'
  `)
  @Example('disabled', 'active')
  [DndSwimlanesLayoutControlsDataAttributes.interactive]?: string;

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Flips the value of the 'interactiveAttribute'.
    Set this to true if the attribute's value is the inverse of the desired state (ie. 'disabled').
  `)
  [DndSwimlanesLayoutControlsInvertAttributes.interactive]: boolean = false;

  @Optional()
  @TrimmedDescription(`
    Syncs an item's visibility to a data attribute.
    When the value of this attribute is true the item not be rendered.
    If not provided, an item will be visible by default and can be toggled by setting 'items[itemId].layoutControls.hidden'
  `)
  @Example('isHidden', 'isVisible')
  [DndSwimlanesLayoutControlsDataAttributes.hidden]?: string;

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Flips the value of the 'hiddenAttribute'.
    Set this to true if the attribute's value is the inverse of the desired state (ie. 'isVisible').
  `)
  [DndSwimlanesLayoutControlsInvertAttributes.hidden]: boolean = false;

  @Optional()
  @TrimmedDescription(`
    Syncs an item's draggable state to a data attribute.
    When the value of this attribute is false the item will not be draggable.
    If not provided, an item will be draggable by default and can be toggled by setting 'items[itemId].layoutControls.draggable'
  `)
  @Example('isMoveable')
  [DndSwimlanesLayoutControlsDataAttributes.draggable]?: string;

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Flips the value of the 'draggableAttribute'.
    Set this to true if the attribute's value is the inverse of the desired state (ie. 'pinned').
  `)
  [DndSwimlanesLayoutControlsInvertAttributes.draggable]: boolean = false
}
