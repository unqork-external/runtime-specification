import { SpreadsheetInputComponentDefinition } from './spreadsheetInput.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SpreadsheetInput Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SpreadsheetInputComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
