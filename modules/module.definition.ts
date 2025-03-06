import { CollectionOf, Description, Example, OneOf, Optional, Required } from '@tsed/schema'

import { ModuleSettings } from './module.settings'
import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'
import { trimAll } from '../../utilities'
import { BaseComponentDefinition } from '../base-component-interface/base.component.definition'
import { Entity } from '../entities'
import { TranslationModel } from '../translations/translations.model'

export class ModuleInteractions {
  @Description('If Drag and Drop should be enabled for this module.')
  enableDnd: boolean = false
}

@TrimmedDescription(`Module Definitions`)
export class ModuleDefinition {
  @Required()
  @Example('658088ff5096efc1899835e7')
  @TrimmedDescription(`
    Unqork Module Id which refers to a bundle of components.
    Vega additionally contains other objects for modifying runtime behavior.
  `)
  id: string

  @Required()
  @Example('Module-Name')
  @TrimmedDescription(`
    Unqork Module Name is another unique identifier for this module.
    Cannot contain spaces or special characters other than - and _.
  `)
  name: string

  @Optional()
  @Description('Defines any module-level interactions, such as drag and drop.')
  interactions?: ModuleInteractions

  @Optional()
  @Example('Module Title')
  @Description(`Title to describe a module`)
  title?: string

  @Optional()
  @Example('Application Name')
  @Description(`Application name for the module`)
  applicationName?: string

  @Optional()
  @Example('Theme')
  @Description(`Used for dynamic UI (we will probably remove this later)`)
  theme?: string

  @Optional()
  @TrimmedDescription(`Module settings.`)
  settings: ModuleSettings = new ModuleSettings()

  @Required()
  @Example('')
  @Description(`A collection of component definitions`)
  @OneOf(() => BaseComponentDefinition)
  @CollectionOf(() => BaseComponentDefinition)
  components: BaseComponentDefinition[]

  @Optional()
  @Example(
    trimAll(`
    {
      key: "moduleId",
      targets: [
        {key: "name", property: "name"}
      ]
    }
  `),
  )
  @Description(`A collection of Entities`)
  @CollectionOf(Entity)
  entities?: Entity[]

  @Description(`FILL ME OUT WITH SOMETHING USEFUL`)
  @Example('')
  translations?: TranslationModel
}
