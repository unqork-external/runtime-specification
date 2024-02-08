import { Required, DiscriminatorValue, Description, Default, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('previewBar')
export class PreviewBarComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'previewBar' = 'previewBar' as const

  @Property(Display)
  display: Display = new Display()

  @Description('List of roles that can be assumed')
  @Default([])
  roles?: string[] = []

  @Description('List styles that can be previewed')
  @Default([])
  styles?: string[] = []

  @Description('Controls if the preview bar is collapsed against the top or not')
  @Default(false)
  collapsed?: boolean = false
}
