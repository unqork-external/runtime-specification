import { Default, Description, Optional } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class ToggleIteratorPropertyOperationOptions extends TargetedOperationOptions {
  @Description('The row path inside the `targetKey` to a node to expand/collapse.')
  rowTargetPath?: string

  @Description('Which property we want to toggle.')
  toggleProperty: string

  @Optional()
  @Description('What we should set the toggleProperty to. If no value is set, we flip it.')
  toggleValue?: boolean

  @Description(
    'If true, apply Op to all children of the target node and expand/collapse any children from this node down.',
  )
  @Default(false)
  applyToChildren: boolean = false
}
