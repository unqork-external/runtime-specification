import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling'
import { FileTargets } from '../targets/fileTargets.enum'

export class FileStyleTargets {
  @Description('CSS target for the list of accepted files')
  @Css()
  [FileTargets.ACCEPTED_FILE_LIST]: CssClassOrProps;

  @Description('CSS target for file drop zone area')
  @Css()
  [FileTargets.DROP_TARGET]: CssClassOrProps;

  @Description('CSS target for field errors')
  @Css()
  [FileTargets.ERRORS]: CssClassOrProps;

  @Description('CSS target for browse files button')
  @Css()
  [FileTargets.FILE_BROWSE_BUTTON]: CssClassOrProps;

  @Description('CSS target for errors on rejected files')
  @Css()
  [FileTargets.FILE_ERROR]: CssClassOrProps;

  @Description('CSS target for file image previews')
  @Css()
  [FileTargets.IMAGE_PREVIEW]: CssClassOrProps;

  @Description('CSS target for the label element')
  @Css()
  [FileTargets.LABEL]: CssClassOrProps;

  @Description('CSS target for the max file size text')
  @Css()
  [FileTargets.MAX_FILE_SIZE]: CssClassOrProps;

  @Description('CSS target for the list of rejected files')
  @Css()
  [FileTargets.REJECTED_FILE_LIST]: CssClassOrProps;

  @Description('CSS target for file remove button')
  @Css()
  [FileTargets.REMOVE_BUTTON]: CssClassOrProps;

  @Description('CSS target for the file root element')
  @Css()
  [FileTargets.ROOT]: CssClassOrProps;

  @Description('CSS target for file tooltip button')
  @Css()
  [FileTargets.TOOLTIP_BUTTON]: CssClassOrProps;

  @Description('CSS target for file tooltip text')
  @Css()
  [FileTargets.TOOLTIP_POPOVER]: CssClassOrProps;

  @Description('CSS target for file upload icon')
  @Css()
  [FileTargets.UPLOAD_ICON]: CssClassOrProps;

  @Description('CSS target for file wrapper first child element')
  @Css()
  [FileTargets.INNER_WRAPPER]: CssClassOrProps;

  @Description('CSS target for file drop row')
  @Css()
  [FileTargets.DROP_ROW]: CssClassOrProps;

  @Description('CSS target for file max size helper text')
  @Css()
  [FileTargets.MAX_SIZE_HELPER_TEXT]: CssClassOrProps
}
