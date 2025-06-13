import { Const, Default, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'
import { JSONSchema7 } from 'json-schema'

import { JsonSchemaEditorStyling } from './jsonSchemaEditor.styling'
import { JsonSchemaEditorTargets } from './jsonSchemaEditorTargets.enum'
import { TrimmedDescription, ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('jsonSchemaEditor')
@ViewTargets(JsonSchemaEditorTargets)
export class JsonSchemaEditorComponentDefinition extends BaseComponentDefinition {
  @Const('jsonSchemaEditor')
  type: 'jsonSchemaEditor' = 'jsonSchemaEditor' as const

  @Required()
  @TrimmedDescription(`
  The schema you wish to render. Must be valid JSON Schema 7
  `)
  schema: JSONSchema7

  @Optional()
  @Default(false)
  @TrimmedDescription(`
  Set to true to use the form library instead of Unqork components
  `)
  useRawForm = false

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Fallback to raw form if an error occurs while rendering the Unqork components
  `)
  fallbackToRawForm = false

  @Optional()
  declare styling?: JsonSchemaEditorStyling

  @Optional()
  declare signals?: SignalTargets<JsonSchemaEditorTargets>

  @Optional()
  nestables = {
    childIds: new StandardArrayNestable(),
  }

  @Property()
  childIds: string[] = []
}
