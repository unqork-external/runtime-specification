import { Required, DiscriminatorValue, Enum, Description } from '@tsed/schema'

import { IconSource } from './iconTypes'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'

@DiscriminatorValue('icon')
export class IconComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'icon' = 'icon' as const

  @Enum(IconSource)
  @Required()
  @Description('sourceType determines how the icon is sourced. If url, a valid url must also be defined in source.')
  sourceType: IconSource

  @Required()
  @Description(
    trimAll(`
      String representing the source of the icon.
      For url, this should be a fully qualified url to the hosted icon image.
      For fontAwesome, this should be a string describing the fontAwesome classes.
      For cssIcon, this string should be the css class definitions to apply.
    `),
  )
  source: string
}
