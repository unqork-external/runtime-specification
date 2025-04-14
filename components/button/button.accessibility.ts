import { Description, Optional } from '@tsed/schema'

@Description('Accessibility Attributes')
export class ButtonAccessibility {
  @Optional()
  @Description('Value for the aria-haspopup attribute.')
  ariaHasPopup?: string

  @Optional()
  @Description('Custom label for the element')
  ariaLabel?: string

  @Optional()
  @Description("List of element IDs acting as the element's label.")
  ariaLabelledBy?: string[]
}
