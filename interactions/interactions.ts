import { Default, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'

export class Interactions {
  @Property()
  @Default(false)
  @TrimmedDescription(`
    Allows the component to be draggable. 
    This does not mean the Component will be able to be dropped without being dragged into a \`isDroppable\` component.
    
    Ensure you've defined a DragContext in order to enable drag/drop behavior.
  `)
  isDraggable?: boolean = false

  @Property()
  @Default(false)
  @TrimmedDescription(`
    Allows the component to be droppable. 
    This does not mean the Component will be able to be dropped without being dragged into a \`isDroppable\` component.
    
    Ensure you've defined a DragContext in order to enable drag/drop behavior.
  `)
  isDroppable?: boolean = false
}
