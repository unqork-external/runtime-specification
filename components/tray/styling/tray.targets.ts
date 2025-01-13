import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TrayTargetsEnum } from '../targets/trayTargets.enum'

export class TrayTargets {
  @Css()
  [TrayTargetsEnum.ROOT]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_HEADER]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_TITLE_WRAPPER]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_TITLE_TEXT]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_TOGGLE_BUTTON_WRAPPER]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_TOGGLE_BUTTON]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.GROUP_TOGGLE_BUTTON_ICON]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.DEFAULT_SEARCH_BAR]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.DRAG_WRAPPER]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.TRAY_ITEM_BUTTON]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.TRAY_ITEM_ICON]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.TRAY_ITEM_TEXT]: CssClassOrProps;
  @Css()
  [TrayTargetsEnum.TRAY_ITEM_BUTTON_DISABLED]: CssClassOrProps
}
