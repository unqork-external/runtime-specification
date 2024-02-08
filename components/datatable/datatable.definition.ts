import { Const, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'

export class DataTableDefinition extends BaseComponentDefinition {
  @Required()
  @Const('datatable')
  type: 'datatable' = 'datatable' as const

  @Optional()
  initialData?: object[]

  @Property()
  headers: string[]

  @Optional()
  declare value?: object[]
}
