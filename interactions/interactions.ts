import { Default, Description, Property } from '@tsed/schema'

import { trimAll } from '../../utilities'

export class Interactions {
  @Property()
  @Default(false)
  @Description(
    trimAll(`
    Allows the component to be draggable. 
    This does not mean the Component will be able to be dropped without being dragged into a \`isDroppable\` component.
    
    Ensure you've defined a DragContext in order to enable drag/drop behavior.
    `),
  )
  isDraggable?: boolean = false

  @Property()
  @Default(false)
  @Description(
    trimAll(`
    Allows the component to be droppable. 
    This does not mean the Component will be able to be dropped without being dragged into a \`isDroppable\` component.
    
    Ensure you've defined a DragContext in order to enable drag/drop behavior.
    `),
  )
  isDroppable?: boolean = false
}
