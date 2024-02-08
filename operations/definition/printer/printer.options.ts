import { Default, Property } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface'

export class PrinterOperationOptions extends BaseOperationOptions {
  @Property()
  thingToPrint: string

  @Property()
  @Default('log')
  logType: string = 'log'
}
