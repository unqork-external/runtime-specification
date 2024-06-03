import { Description } from '@tsed/schema'

import { SimpleViewModel } from './simpleViewModel'
import { BaseComponentDefinition } from '../../../base-component-interface'

@Description('Base Definition for table cell components')
export class CellComponentDefinition extends BaseComponentDefinition {
  @Description('meta data for simple views')
  simpleView?: SimpleViewModel
}
