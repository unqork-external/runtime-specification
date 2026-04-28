import { UdEmbeddedQuillComponentDefinition } from './udEmbeddedQuill.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UdEmbeddedQuill Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdEmbeddedQuillComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
