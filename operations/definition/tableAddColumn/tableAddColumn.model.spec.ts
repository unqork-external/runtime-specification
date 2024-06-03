import { TableAddColumnOperation } from './tableAddColumn.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableAddColumn Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableAddColumnOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema.properties).toMatchSnapshot()
  })
})
