import { Description, Property } from '@tsed/schema'

import { JsonSchemaEditorTargets } from './jsonSchemaEditorTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class JsonSchemaEditorStyleTargets implements TargetsModel<JsonSchemaEditorTargets> {
  @Css()
  @Description('Adds styles to jsonSchemaEditor root ComponentWrapper.')
  [JsonSchemaEditorTargets.root]: CssClassOrProps
}

export class JsonSchemaEditorStyling extends StylingModel<JsonSchemaEditorStyleTargets> {
  @Property()
  declare targets: JsonSchemaEditorStyleTargets
}
