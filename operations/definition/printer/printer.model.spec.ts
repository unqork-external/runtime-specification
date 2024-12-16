import { PrinterOperation } from './printer.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Printer Tests', () => {
  it('Printer Model', () => {
    const { schema } = generateSchemaAndValidate(PrinterOperation)

    expect(schema).toMatchSnapshot()
  })
})
