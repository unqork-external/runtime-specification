import { Description, Required } from '@tsed/schema'

import { BaseTrayItemDefinition } from '../../../designer-specification'

export class TrayGroupDefinition {
  @Required()
  @Description('Title of the group which will be displayed in the accordion.')
  title: string

  @Required()
  @Description('Tray items in that will be the children of the group.')
  items: BaseTrayItemDefinition[]
}
