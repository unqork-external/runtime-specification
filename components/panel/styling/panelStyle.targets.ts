import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { PanelTargets } from '../targets/panelTargets.enum'

export class PanelStyleTargets {
  @Description("Adds styles to Panel's content body.")
  @Css()
  [PanelTargets.contentBody]: CssClassOrProps;

  @Description("Adds styles to Panel's content wrapper.")
  @Css()
  [PanelTargets.contentWrapper]: CssClassOrProps;

  @Description("Adds styles to Panel's header.")
  @Css()
  [PanelTargets.header]: CssClassOrProps;

  @Description("Adds styles to Panel's ComponentWrapper.")
  @Css()
  [PanelTargets.root]: CssClassOrProps;

  @Description("Adds styles to Panel's modal top level.")
  @Css()
  [PanelTargets.modal]: CssClassOrProps;

  @Description("Adds styles to Panel's modal backdrop.")
  @Css()
  [PanelTargets.modalBackdrop]: CssClassOrProps;

  @Description("Adds styles to Panel's modal close button.")
  @Css()
  [PanelTargets.modalClose]: CssClassOrProps;

  @Description("Adds styles to Panel's modal dialog.")
  @Css()
  [PanelTargets.modalDialog]: CssClassOrProps;

  @Description("Adds styles to Panel's modal header.")
  @Css()
  [PanelTargets.modalHeader]: CssClassOrProps;

  @Description("Adds styles to Panel's title.")
  @Css()
  [PanelTargets.title]: CssClassOrProps
}
