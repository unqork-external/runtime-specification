import { TablePasteValuesOperation } from './tablePasteValues.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TablePasteValues Tests', () => {
  it('TablePasteValues Model', () => {
    const { schema } = generateSchemaAndValidate(TablePasteValuesOperation)

    expect(schema).toMatchSnapshot()
  })
})
