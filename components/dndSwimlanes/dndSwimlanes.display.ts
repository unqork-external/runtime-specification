import { Default, Description } from '@tsed/schema'

import { Display } from '../../componentComposition/display/component.display'

export class DndSwimlanesDisplay extends Display {
  @Description('If drag & drop is enabled for all Swimlanes or not.')
  @Default(true)
  dndDisabled: boolean = false

  @Description('If we should show the Swimlane count at the top of the Swimlane or not.')
  @Default(true)
  showSwimlaneCount: boolean = true
}
