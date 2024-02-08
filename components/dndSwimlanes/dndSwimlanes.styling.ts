import { Description } from '@tsed/schema'

import { Css } from '../../../decorators/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'

export class DndSwimlanesStyling {
  targets: DndSwimlanesStylingTargets
}

export class DndSwimlanesStylingTargets {
  @Description('Adds styles to Swimlanes root ComponentWrapper.')
  @Css()
  root: CssClassOrProps

  @Description("Adds styles to an individual Swimlane's list wrapper.")
  @Css()
  listWrapper: CssClassOrProps

  @Description("Adds styles to a Swimlane's label wrapper div.")
  @Css()
  labelWrapper: CssClassOrProps

  @Description("Adds styles to a Swimlane's label span.")
  @Css()
  label: CssClassOrProps

  @Description("Adds styles to a Swimlane's card count span.")
  @Css()
  swimlaneCardCount: CssClassOrProps

  @Description('Adds styles to the ul list element for the Swimlane.')
  @Css()
  listUl: CssClassOrProps

  @Description('Adds styles to both Before and After DropTargets.')
  @Css()
  cardDropTarget: CssClassOrProps

  @Description('Adds styles to just the Before DropTarget.')
  @Css()
  cardDropTargetBefore: CssClassOrProps

  @Description('Adds styles to just the After DropTarget.')
  @Css()
  cardDropTargetAfter: CssClassOrProps

  @Description('Adds styles to the empty DropTarget if no Cards are in the Swimlane.')
  @Css()
  emptyCardPlaceholder: CssClassOrProps

  @Description("Adds styles to an individual Card's outer wrapper.")
  @Css()
  cardOuterWrapper: CssClassOrProps

  @Description('Adds styles to an individual Card inside the outerWrapper.')
  @Css()
  card: CssClassOrProps

  @Description("Adds styles to an individual Card's inner wrapper inside card.")
  @Css()
  cardInnerWrapper: CssClassOrProps

  @Description('Adds styles to the body of the Card inside the inner wrapper.')
  @Css()
  cardBody: CssClassOrProps
}
