import { DiscriminatorValue, Required } from '@tsed/schema'

import { PrinterOperationOptions } from './printer.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.PRINTER)
@Alpha()
export class PrinterOperation extends Operation<OperationTypes.PRINTER> {
  public type = OperationTypes.PRINTER as const

  @Required()
  public options: PrinterOperationOptions = new PrinterOperationOptions()
}
