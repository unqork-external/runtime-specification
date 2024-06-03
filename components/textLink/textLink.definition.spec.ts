import { TextLinkComponentDefinition } from './textLink.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Link Text Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TextLinkComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
