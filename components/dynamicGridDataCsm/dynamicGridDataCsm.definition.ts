import { Const, Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { DynamicGridDataCsmStyling } from './dynamicGridDataCsm.styling'
import { DynamicGridDataCsmTargets } from './dynamicGridDataCsmTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('dynamicGridDataCSM')
@ViewTargets(DynamicGridDataCsmTargets)
export class DynamicGridDataCsmComponentDefinition extends BaseComponentDefinition {
  @Const('dynamicGridDataCSM')
  type: 'dynamicGridDataCSM' = 'dynamicGridDataCSM' as const

  @Optional()
  declare styling?: DynamicGridDataCsmStyling

  @Optional()
  declare signals?: SignalTargets<DynamicGridDataCsmTargets>

  @Optional()
  @Default({})
  @Description('Holds the state of the column configuration being edited')
  currentColumnsConfiguration?: any = {}

  @Required()
  @Default(false)
  @Description('Flag denoting if the if a column is editor is open')
  columnEditorOpen: boolean = false

  @Optional()
  @Description('Index of rhe column being edited in the modal')
  columnEditorCurrentIndex?: number

  @Optional()
  @Description('Column Type of the component being edited in the modal')
  columnEditorCurrentType?: string

  @Required()
  @Default([])
  value: any[] = []

  @Description('Child ids for nestable references')
  childIds: string[] = []

  @Description('Nestable information')
  nestables = { childIds: new StandardArrayNestable() }
}
