import { Property } from '@tsed/schema'

import { FileStyleTargets } from './fileStyle.targets'
import { StylingModel } from '../../../styling'

export class FileStyling extends StylingModel<FileStyleTargets> {
  @Property()
  declare targets: FileStyleTargets
}
