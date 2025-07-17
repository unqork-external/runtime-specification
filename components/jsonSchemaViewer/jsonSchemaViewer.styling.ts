import { Description, Property } from '@tsed/schema'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

import { JsonSchemaViewerTargets } from './jsonSchemaViewerTargets.enum'

export class JsonSchemaViewerStyleTargets implements TargetsModel<JsonSchemaViewerTargets> {
  @Css()
  @Description('Adds styles to jsonSchemaViewer root ComponentWrapper.')
  [JsonSchemaViewerTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to jsonSchemaViewer body ComponentWrapper.')
  [JsonSchemaViewerTargets.body]: CssClassOrProps
}

export class JsonSchemaViewerStyling extends StylingModel<JsonSchemaViewerStyleTargets> {
  @Property()
  declare targets: JsonSchemaViewerStyleTargets
}
