import { Default, Property } from '@tsed/schema'

export class PrinterOperationOptions {
  @Property()
  thingToPrint: string

  @Property()
  @Default('log')
  logType: string = 'log'
}
