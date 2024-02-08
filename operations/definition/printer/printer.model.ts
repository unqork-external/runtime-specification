import { DiscriminatorValue, Required } from '@tsed/schema'

import { PrinterOperationOptions } from './printer.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.PRINTER)
export class PrinterOperation extends Operation<OperationTypes.PRINTER> {
  @Required()
  public options: PrinterOperationOptions = new PrinterOperationOptions()
}
