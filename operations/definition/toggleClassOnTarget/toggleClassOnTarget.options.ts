import { Description, Example } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class ToggleClassOnTargetOperationOptions extends TargetedOperationOptions {
  @Description('The styling target where the classname will toggle.')
  @Example('root', 'tableHeaderCell')
  stylingTarget: string

  @Description('The name of the class that will be toggled')
  classname: string
}
