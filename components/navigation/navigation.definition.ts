import { CollectionOf, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { NavigationData } from './navigationData'
import { NavigationDisplay } from './navigationDisplay'
import { NavigationErrors } from './navigationErrors'
import { NavigationField } from './navigationField'
import { NavigationOptions } from './navigationOptions'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('navigation')
export class NavigationComponentDefinition extends BaseComponentDefinition {
  @Property()
  type: string = 'navigation' as const

  @Property(NavigationField)
  @Description('Field settings for the Navigation component.')
  field: NavigationField = new NavigationField()

  @Property(NavigationDisplay)
  @Description('Display settings for the Navigation component.')
  display: NavigationDisplay = new NavigationDisplay()

  @CollectionOf(NavigationData)
  @Description('All the navigation settings for individual pages in the component')
  navigationData: NavigationData[]

  @Property(NavigationOptions)
  @Description('All the settings specific to the navigation component')
  options: NavigationOptions = new NavigationOptions()

  // TODO: This should NOT be configurable in the designer.
  // Probably need a better pattern to track the error state of the component but using it here for now
  @Property(NavigationErrors)
  @Description('Used to keep track of errors on the component. Should NOT be configurable in the designer')
  errors: NavigationErrors = new NavigationErrors()

  @Description('Nestable information for navigation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]
}
