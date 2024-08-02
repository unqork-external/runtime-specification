import { CollectionOf, Description, Default } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class RemoveNestedComponentsOperationOptions extends TargetedOperationOptions {
  @Description('Key of the nestable in which the new components should be removed.')
  nestable: string

  @Default([])
  @Description('Ids of the nestable components to  be removed.')
  @CollectionOf(String)
  nestablesToRemove?: string[] = []

  @Default(false)
  @Description('Optional parameter. If true, any components currently in the named nestable will be removed.')
  removeAllChildren?: boolean = false
}
