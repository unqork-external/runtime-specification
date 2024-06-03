import { SearchSelectOptionComponentDefinition } from './searchSelectOption.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SearchSelectOption Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SearchSelectOptionComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
