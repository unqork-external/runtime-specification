import { CollectionOf, Description, Optional } from '@tsed/schema'

export class CustomAriaAttribute {
  @Optional()
  @Description('ARIA attribute')
  attribute: string

  @Optional()
  @Description('Value of the specific attribute.')
  value: string
}

@Description('Accessibility Attributes')
export class AccessibilityCommon {
  @Optional()
  @Description(
    'Use custom ARIA attributes to enhance accessibility beyond built-in settings. Add ARIA attributes and their values to define how assistive technologies interpret your components. Ensure attributes are valid and appropriate for the selected elements.',
  )
  @CollectionOf(CustomAriaAttribute)
  ariaCustom?: CustomAriaAttribute[]

  @Optional()
  @Description('List of element IDs that describe the content of the element.')
  ariaDescribedBy?: string[]

  @Optional()
  @Description('Custom description for the element.')
  ariaDescription?: string

  @Optional()
  @Description('Indicates the element should be skipped by screen readers.')
  ariaHidden?: boolean

  @Optional()
  @Description('Custom label for the element')
  ariaLabel?: string

  @Optional()
  @Description("List of element IDs acting as the element's label.")
  ariaLabelledBy?: string[]

  @Optional()
  @Description('Indicates the type of interruption to use when announcing changes to the element for screen readers.')
  ariaLive?: string

  @Optional()
  @Description('The role this element represents for screen readers.')
  ariaRole?: string
}
