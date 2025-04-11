import { AddressSearchComponentDefinition } from './addressSearch.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('AddressSearch Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(AddressSearchComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
