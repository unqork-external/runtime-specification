import { Const, Default, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { AdvancedModeJsonDifferStyling } from './advancedModeJsonDiffer.styling'
import { AdvancedModeJsonDifferTargets } from './advancedModeJsonDifferTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('advancedModeJsonDiffer')
@ViewTargets(AdvancedModeJsonDifferTargets)
export class AdvancedModeJsonDifferComponentDefinition extends BaseComponentDefinition {
  @Const('advancedModeJsonDiffer')
  type: 'advancedModeJsonDiffer' = 'advancedModeJsonDiffer' as const

  @Optional()
  declare styling?: AdvancedModeJsonDifferStyling

  @Optional()
  declare signals?: SignalTargets<AdvancedModeJsonDifferTargets>

  @Description('The source JSON or plain text')
  source: JSON | string

  @Description('The target JSON or plain text')
  target: JSON | string

  @Description(`The target JSON or plain text used to initialize the edit section's value. ' +
    'If undefined, the edit section will default to the source value`)
  initialEditSection?: JSON | string

  @Description('The type of data being provided to JSON Differ Component')
  docType: 'json' | 'html'

  @Description('Indicates if the contents of the editable section are valid')
  isValid?: boolean

  @Description('Indicates if edit mode should be enabled')
  editMode: boolean = false

  @Description('Indicates if differences should be highlighted')
  @Default(true)
  showDifferences: boolean = true

  @Description('The resolution of the source and target data')
  declare value: JSON | string

  @Description('When true applies loading state to component')
  isLoading: boolean = false

  @Description('When true shows advanced mode controls')
  advancedControls: boolean = true
}
