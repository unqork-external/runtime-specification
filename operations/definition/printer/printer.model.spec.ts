import { PrinterOperation } from './printer.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Printer Tests', () => {
  it('Printer Model', () => {
    const { schema } = generateSchemaAndValidate(PrinterOperation)

    expect(schema.properties).toEqual({
      type: { type: 'string', const: 'PRINTER', examples: ['PRINTER'] },
      name: { type: 'string', description: 'Name of the operation' },
      options: { $ref: '#/definitions/PrinterOperationOptions' },
    })
  })
})
