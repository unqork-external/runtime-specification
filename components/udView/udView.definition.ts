import {
  CollectionOf,
  Default,
  Description,
  DiscriminatorValue,
  Enum,
  Optional,
  Property,
  Required,
} from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'
import { StandardArrayNestable } from '../../nestables'

export class UdViewBasicField extends Field {
  @Description('Allows customization of the class HTML parameter for the root element of the component')
  customClass?: string
}

export class UdViewDraggable {
  @Description('The data this object transmits when being dropped')
  dragData?: string

  @Description('The drag group this component belongs to')
  dragGroup?: string

  @Description('Indicates a component is draggable')
  isDraggable?: boolean = false
}

export class UdViewDroppable {
  @Description('Array of strings for the drag groups that can be dropped in this component')
  allowedDragGroups?: string[]

  @Description('Component key to trigger when a component is dropped')
  dropTrigger?: string

  @Description('Text to display when the component has no children')
  emptyText?: string

  @Description('Indicates a component is droppable')
  isDroppable?: boolean = false

  @Description(
    'Location metadata to be sent to the parent droppable component in case a droppable child receives a drop',
  )
  locationId?: string = ''

  @Description(
    'Text to display in the location that will accept a component while its being dragged over this component',
  )
  placementText?: string
}

export class UdViewDroppableValue {
  @Description('Location metadata from the droppable component highest on the DOM tree that received the drop')
  droppedLocationId?: string

  @Description('Index within the droppable component where the drop happened, -1 if above the first element')
  droppedIndex?: number

  @Description('The drag group of the dropped item')
  droppedDragGroup?: string

  @Description('The data from the dropped item')
  droppedDragData?: string
}

export enum UdViewDirection {
  HORIZONTAL = 'horizontal',
  DEFAULT = 'default',
  VERTICAL = 'vertical',
}

export enum UdViewAppearance {
  ASIDE = 'aside',
  BLOCK = 'block',
  FOOTER = 'footer',
  HEADER = 'header',
  INLINE = 'inline',
  LIST_ITEM = 'list-item',
  MAIN = 'main',
  NAVIGATION = 'navigation',
  NONE = 'none',
  ORDERED_LIST = 'ordered-list',
  SECTION = 'section',
  UNORDERED_LIST = 'unordered-list',
}

@DiscriminatorValue('udView')
export class UdViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udView' = 'udView' as const

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description(
    trimAll(`
    Appearance represents the intended visual style and role for the view.
  `),
  )
  appearance?: UdViewAppearance

  @Enum(UdViewDirection)
  @Default(UdViewDirection.VERTICAL)
  @Description(
    trimAll(`
    Direction represents how the view children should be disposed.
  `),
  )
  direction?: UdViewDirection

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewDraggable)
  @Description('Draggable properties')
  draggable?: UdViewDraggable

  @Property(UdViewDroppable)
  @Description('Droppable properties')
  droppable?: UdViewDroppable

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Property(UdViewDroppableValue)
  @Description('Component value including data from drop events')
  declare value?: UdViewDroppableValue

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child IDs for nestable references')
  childIds: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]
}
