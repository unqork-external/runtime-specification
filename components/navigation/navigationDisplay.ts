import { Default, Description } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export class NavigationDisplay {
  @Default(false)
  @Description('Determines if the component should be shown')
  hidden?: boolean = false

  @Default(true)
  @Description(
    trimAll(`Determines whether or not the component will respond to user interaction.
    When true, upon user interaction, the component behaves as expected.
    When false, user interaction is blocked.`),
  )
  interactive?: boolean = true

  @Default(false)
  @Description('Changes the display for the navigation to be vertical (similar to a table of contents)')
  verticalDisplay?: boolean = false

  @Default(false)
  @Description('Creates tab style navigation (default is bubbles)')
  showAsTabs?: boolean = false

  @Default(false)
  @Description('Moves the errors to top of the page (default is bottom of page)')
  showErrorsOnTop?: boolean = false
}
