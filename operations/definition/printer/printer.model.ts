import { DiscriminatorValue, Required } from '@tsed/schema'

import { PrinterOperationOptions } from './printer.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Printer')
@DiscriminatorValue(OperationTypes.PRINTER)
@Alpha()
@AutogenDisabled()
export class PrinterOperation extends Operation<OperationTypes.PRINTER> {
  public type = OperationTypes.PRINTER as const

  @Required()
  public options: PrinterOperationOptions = new PrinterOperationOptions()
}
