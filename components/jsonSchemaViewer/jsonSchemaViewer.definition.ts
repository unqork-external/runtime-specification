import { type JSONSchema } from '@stoplight/json-schema-viewer'
import { Const, Default, Description, DiscriminatorValue, Optional } from '@tsed/schema'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'

import { JsonSchemaViewerStyling } from './jsonSchemaViewer.styling'
import { JsonSchemaViewerTargets } from './jsonSchemaViewerTargets.enum'

@DiscriminatorValue('jsonSchemaViewer')
@ViewTargets(JsonSchemaViewerTargets)
export class JsonSchemaViewerComponentDefinition extends BaseComponentDefinition {
  @Const('jsonSchemaViewer')
  type: 'jsonSchemaViewer' = 'jsonSchemaViewer' as const

  @Optional()
  @Default({})
  @Description('Render the JSON schema viewer based on this property')
  schema: JSONSchema = {}

  @Optional()
  @Default('No schema provided')
  @Description('Text to be displayed when the schema is empty')
  emptyText: string = 'No schema provided'

  @Optional()
  @Default(false)
  @Description('Will hide the example/examples properties of the JSON schema when set to true')
  hideExamples: boolean = false

  @Optional()
  declare styling?: JsonSchemaViewerStyling

  @Optional()
  declare signals?: SignalTargets<JsonSchemaViewerTargets>
}
