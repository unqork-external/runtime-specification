import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { CanvasTargetsEnum } from '../targets/canvasTargets.enum'

export class CanvasStylingTargets implements TargetsModel<CanvasTargetsEnum> {
  @Css()
  @Description('Adds styles to the root div for the canvas component.')
  [CanvasTargetsEnum.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the canvas.')
  [CanvasTargetsEnum.canvas]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the empty state for the canvas.')
  [CanvasTargetsEnum.canvasEmpty]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the icon on the empty state of the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateImage]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the <p> with the main text on the empty state of the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateText]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the <p> with the subtext on the empty state of the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateSubtext]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the button on the empty state of the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the empty state for nested dropzones within the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateNestedDropzone]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the <p> with the text for the empty state for nested dropzones within the canvas.')
  [CanvasTargetsEnum.canvasEmptyStateNestedDropzoneText]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div of a dropzone in the canvas.')
  [CanvasTargetsEnum.dropzone]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the div of a dropzone in the canvas.')
  [CanvasTargetsEnum.dropzoneWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping a representation.')
  [CanvasTargetsEnum.representationViewWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div responsible for onClick edit of representation')
  [CanvasTargetsEnum.representationOnClickWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping the dragPreview')
  [CanvasTargetsEnum.dragPreview]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapping a Canvas Item Header')
  [CanvasTargetsEnum.canvasItemHeader]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapper around the canvas item header')
  [CanvasTargetsEnum.canvasItemHeaderWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the button on the top of the canvas.')
  [CanvasTargetsEnum.canvasButtonsWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the div wrapper of a representation.')
  [CanvasTargetsEnum.representationWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the scroll target of a representation.')
  [CanvasTargetsEnum.representationScrollTarget]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the outer div wrapper the inner dropzone.')
  [CanvasTargetsEnum.representationInnerDropZoneWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the button that opens the representation button menu.')
  [CanvasTargetsEnum.representationButtonsOpenMenu]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the button that toggles edit in the representation buttons.')
  [CanvasTargetsEnum.representationButtonsOpenEdit]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the text in the representation button.')
  [CanvasTargetsEnum.representationButtonsDisplayText]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the icon in the canvas item header.')
  [CanvasTargetsEnum.canvasItemHeaderIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the icon in the canvas item type.')
  [CanvasTargetsEnum.canvasItemHeaderType]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the icon in the canvas item label.')
  [CanvasTargetsEnum.canvasItemHeaderLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the badge ui in the canvas item label.')
  [CanvasTargetsEnum.canvasItemHeaderBadgeRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the text content in the badge ui in the canvas item label.')
  [CanvasTargetsEnum.canvasItemHeaderBadgeText]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the icon in the badge ui in the canvas item label.')
  [CanvasTargetsEnum.canvasItemHeaderBadgeIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the collapse icon in the canvas item header for nestable components.')
  [CanvasTargetsEnum.canvasItemHeaderCollapse]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the wrapper element of a component's empty state.")
  [CanvasTargetsEnum.canvasItemEmptyRoot]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the text content of a component's empty state.")
  [CanvasTargetsEnum.canvasItemEmptyContent]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the title of a component's empty state.")
  [CanvasTargetsEnum.canvasItemEmptyContentTitle]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationButtonsWrapper for the canvas component.')
  [CanvasTargetsEnum.representationButtonsWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButtonRoot for the canvas component.')
  [CanvasTargetsEnum.representationActionButtonRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButton for the canvas component.')
  [CanvasTargetsEnum.representationActionButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButtonPopoverRoot for the canvas component.')
  [CanvasTargetsEnum.representationActionButtonPopoverRoot]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButtonPopoverContent for the canvas component.')
  [CanvasTargetsEnum.representationActionButtonPopoverContent]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButtonPopoverLabel for the canvas component.')
  [CanvasTargetsEnum.representationActionButtonPopoverLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the representationActionButtonPopoverKeyboardShortcut for the canvas component.')
  [CanvasTargetsEnum.representationActionButtonPopoverKeyboardShortcut]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the representation information.')
  [CanvasTargetsEnum.representationInformationWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the button that toggles the representation information state.')
  [CanvasTargetsEnum.representationInformationOpenButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around a section in the representation information.')
  [CanvasTargetsEnum.representationInformationSectionWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the comment section in the representation information.')
  [CanvasTargetsEnum.representationCommentSectionWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the representation information.')
  [CanvasTargetsEnum.representationInformationDropdown]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the representation information header.')
  [CanvasTargetsEnum.representationInformationHeader]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the to the wrapper around the representation information item.')
  [CanvasTargetsEnum.representationInformationItem]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the representation information text within an item.')
  [CanvasTargetsEnum.representationInformationItemText]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the component's signals wrapper.")
  [CanvasTargetsEnum.representationHeaderSignalsWrapper]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the component's signals button.")
  [CanvasTargetsEnum.representationHeaderSignalsButton]: CssClassOrProps;

  @Css()
  @Description("Adds styles to the component's signals button label.")
  [CanvasTargetsEnum.representationHeaderSignalsButtonLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the canvas item status message.')
  [CanvasTargetsEnum.canvasItemStatusMessage]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the canvas dragged representation icon.')
  [CanvasTargetsEnum.representationDraggedIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the wrapper around the canvas dragged representation component key.')
  [CanvasTargetsEnum.representationDraggedKey]: CssClassOrProps
}
