import { TableClearOperation } from './tableClear.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableClear Tests', () => {
  let schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(TableClearOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
