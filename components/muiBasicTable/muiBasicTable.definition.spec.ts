import { MuiBasicTableComponentDefinition } from './muiBasicTable.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('MuiBasicTable Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiBasicTableComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    // expect(schema.properties).toEqual({})
  })
})
