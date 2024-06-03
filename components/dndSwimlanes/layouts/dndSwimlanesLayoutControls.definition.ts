import { Default, Description, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class DndSwimlanesLayoutControls {
  @Optional()
  @Default(true)
  @Description('Whether the card can be dragged to another position or lane.')
  draggable: boolean = true

  @Optional()
  @Default(true)
  @Description('Whether the card is rendered in the lane.')
  hidden: boolean = false

  @Optional()
  @Default(true)
  @TrimmedDescription(`
    Whether the card is interactive.
    When false, the card has a disabled appearance, is not draggable, and all child components have 'display.interactive' set to false. 
  `)
  interactive: boolean = true
}
