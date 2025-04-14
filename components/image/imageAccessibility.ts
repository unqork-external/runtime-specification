import { CollectionOf, Description, Optional } from '@tsed/schema'

import { CustomAriaAttribute } from '../../component-composition'

@Description('Accessibility Attributes')
export class ImageAccessibility {
  @Optional()
  @Description(
    'Use custom ARIA attributes to enhance accessibility beyond built-in settings. Add ARIA attributes and their values to define how assistive technologies interpret your components. Ensure attributes are valid and appropriate for the selected elements.',
  )
  @CollectionOf(CustomAriaAttribute)
  ariaCustom?: CustomAriaAttribute[]

  @Optional()
  @Description('Indicates the element should be skipped by screen readers.')
  ariaHidden?: boolean
}
