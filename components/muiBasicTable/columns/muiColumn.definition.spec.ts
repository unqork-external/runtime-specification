import { MuiColumnDefinition } from './muiColumn.definition'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('MuiBasicTable Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiColumnDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
