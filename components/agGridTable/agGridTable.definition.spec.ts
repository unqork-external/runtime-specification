import { AgGridTableComponentDefinition } from './agGridTable.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('AgGridTable Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(AgGridTableComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
