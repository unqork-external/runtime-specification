import { Description, Property } from '@tsed/schema'

import { SpreadsheetInputTargets } from './spreadsheetInputTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class SpreadsheetInputStyleTargets implements TargetsModel<SpreadsheetInputTargets> {
  @Css()
  @Description('Adds styles to spreadsheetInput root ComponentWrapper.')
  [SpreadsheetInputTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput row indicator.')
  [SpreadsheetInputTargets.rowIndicator]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput row action button wrapper.')
  [SpreadsheetInputTargets.rowActionButtonWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput copy row action button.')
  [SpreadsheetInputTargets.copyRowActionButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput cut row action button.')
  [SpreadsheetInputTargets.cutRowActionButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput inset above row action button.')
  [SpreadsheetInputTargets.insetAboveRowActionButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput inset below row action button.')
  [SpreadsheetInputTargets.insertBelowRowActionButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to spreadsheetInput paste above row action button.')
  [SpreadsheetInputTargets.pasteAboveRowActionButton]: CssClassOrProps;

  @Description('Adds styles to spreadsheetInput paste row action button.')
  [SpreadsheetInputTargets.pasteRowActionButton]: CssClassOrProps;

  @Description('Adds styles to spreadsheetInput clear row action button.')
  [SpreadsheetInputTargets.clearRowActionButton]: CssClassOrProps;

  @Description('Adds styles to spreadsheetInput delete row action button.')
  [SpreadsheetInputTargets.deleteRowActionButton]: CssClassOrProps
}

export class SpreadsheetInputStyling extends StylingModel<SpreadsheetInputStyleTargets> {
  @Property()
  declare targets: SpreadsheetInputStyleTargets
}
