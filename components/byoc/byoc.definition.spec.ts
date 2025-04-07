import { ByocComponentDefinition } from './byoc.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Byoc Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ByocComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
