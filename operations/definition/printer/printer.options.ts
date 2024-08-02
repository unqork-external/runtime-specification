import { Default, Property } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class PrinterOperationOptions extends OperationOptions {
  @Property()
  thingToPrint: string

  @Property()
  @Default('log')
  logType: string = 'log'
}
