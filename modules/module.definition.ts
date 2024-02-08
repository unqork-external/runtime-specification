import { CollectionOf, Description, Example, OneOf, Optional, Required } from '@tsed/schema'

import { trimAll } from '../../utilities'
import { BaseComponentDefinition } from '../baseComponentInterface/base.component.definition'
import { Entity } from '../entities'
import { TranslationModel } from '../translations/translations.model'

export class ModuleInteractions {
  @Description('If Drag and Drop should be enabled for this module.')
  enableDnd: boolean = false
}

@Description(trimAll(`Module Definitions`))
export class ModuleDefinition {
  @Required()
  @Example('658088ff5096efc1899835e7')
  @Description(
    trimAll(`
    Unqork Module Id which refers to a bundle of components. 
    Vega additionally contains other objects for modifying runtime behavior.
    `),
  )
  id: string

  @Required()
  @Example('Module-Name')
  @Description(
    trimAll(`
    Unqork Module Name is another unique identifier for this module. 
    Cannot contain spaces or special characters other than - and _.
    `),
  )
  name: string

  @Optional()
  @Description('Defines any module-level interactions, such as drag and drop.')
  interactions?: ModuleInteractions

  @Optional()
  @Example('Module Title')
  @Description(
    trimAll(`
    Title to describe a module
  `),
  )
  title?: string

  @Optional()
  @Example('Theme')
  @Description(
    trimAll(`
    Used for dynamic UI (we will probably remove this later)
  `),
  )
  theme?: string

  @Optional()
  @Description(
    trimAll(`
    Module settings
  `),
  )
  settings?: {
    runtimeVersion?: '1.0.0' | '2.0.0'
  }

  @Required()
  @Example('')
  @Description(
    trimAll(`
    A collection of component definitions
  `),
  )
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
  @Description(
    trimAll(`
    A collection of Entities
  `),
  )
  @CollectionOf(Entity)
  entities?: Entity[]

  @Description(
    trimAll(`
      FILL ME OUT WITH SOMETHING USEFUL
    `),
  )
  @Example(trimAll(``))
  translations?: TranslationModel
}
