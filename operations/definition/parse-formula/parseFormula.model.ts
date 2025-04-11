import { DiscriminatorValue, Required } from '@tsed/schema'

import { ParseFormulaOptions } from './parseFormula.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Parse Formula')
@DiscriminatorValue(OperationTypes.PARSE_FORMULA)
@Alpha()
@AutogenDisabled()
export class ParseFormulaOperation extends Operation<OperationTypes.PARSE_FORMULA> {
  public type = OperationTypes.PARSE_FORMULA as const

  @Required()
  public options: ParseFormulaOptions = new ParseFormulaOptions()
}
