import { Description, Enum, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators'
import { IconSource } from '../icon'

export class ComboboxIcon {
  @Enum(IconSource)
  @Required()
  @Description('sourceType determines how the icon is sourced. If url, a valid url must also be defined in source.')
  sourceType: IconSource

  @Required()
  @TrimmedDescription(`
    String representing the source of the icon.
    For url, this should be a fully qualified url to the hosted icon image.
    For fontAwesome, this should be a string describing the fontAwesome classes.
    For cssIcon, this string should be the css class definitions to apply.
  `)
  source: string
}
