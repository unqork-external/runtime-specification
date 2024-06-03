import { ColumnsComponentDefinition } from './columns.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Columns Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ColumnsComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
