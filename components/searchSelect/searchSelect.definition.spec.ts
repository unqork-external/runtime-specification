import { SearchSelectComponentDefinition } from './searchSelect.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SearchSelect Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SearchSelectComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
