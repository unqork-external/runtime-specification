import { CollectionOf, Description, Default } from '@tsed/schema'

export class RemoveNestedComponentsOperationOptions {
  @Description('Key of the component for which we want to remove the nested component')
  targetKey: string

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
