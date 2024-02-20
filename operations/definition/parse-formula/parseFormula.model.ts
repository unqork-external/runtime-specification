import { DiscriminatorValue, Required } from '@tsed/schema'

import { ParseFormulaOptions } from './parseFormula.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.PARSE_FORMULA)
export class ParseFormulaOperation extends Operation<OperationTypes.PARSE_FORMULA> {
  public type = OperationTypes.PARSE_FORMULA as const

  @Required()
  public options: ParseFormulaOptions = new ParseFormulaOptions()
}
