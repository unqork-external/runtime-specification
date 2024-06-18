import { TableCopyValuesOperation } from './tableCopyValues.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableCopyValues Tests', () => {
  it('TableCopyValues Model', () => {
    const { schema } = generateSchemaAndValidate(TableCopyValuesOperation)

    expect(schema).toMatchSnapshot()
  })
})
