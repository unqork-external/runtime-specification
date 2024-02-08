import { Description, Property } from '@tsed/schema'

import { Label } from '../../componentComposition/field/component.field.label'

export class NavigationField {
  @Description('Label use primarily in the designer, but also used as a backup to the aria-label if no title is set')
  label: Label = new Label()

  @Description('Main title displayed at top of navigation component')
  title?: string

  @Description('Subtitle displayed under main title')
  subTitle?: string

  @Description('Adds a custom class into component')
  customClass?: string
}
