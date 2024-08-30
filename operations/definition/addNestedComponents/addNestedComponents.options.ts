import { CollectionOf, Default, Description } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../../base-component-interface/base.component.definition'

export class AddNestedComponentsOperationOptions {
  @TrimmedDescription(`
    The new API to replace the existing options. Cannot replace the existing options due to:
    1. lack of versioning
    2. UDesigner already directly dependent on the API.
    
    Adding by groups optimizes the amount of writing we'll do.
  `)
  byGroup?: AddByGroup[]

  @Description('Key of the component to add nested components to.')
  targetKey?: string

  @Description('Key of the nestable in which the new components should be added.')
  nestable?: string

  @Description('Component definitions to add to the target nestable.')
  @CollectionOf(() => BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Default(false)
  @TrimmedDescription(`
    Optional parameter. If true, any components currently in the named nestable will
    be removed, and the new components will be added in their place.
  `)
  replace?: boolean = false

  @TrimmedDescription(`
    Optional parameter. If set, the new components will be inserted at the position
    index specified. Defaults to inserting at the end of the list of components.
  `)
  position?: number
}

class AddByGroup {
  @Description('Key of the component to add nested components to.')
  targetKey: string

  @Description('Key of the nestable in which the new components should be added.')
  nestable: string

  @Description('Component definitions to add to the target nestable.')
  @CollectionOf(() => BaseComponentDefinition)
  components: BaseComponentDefinition[]
}
