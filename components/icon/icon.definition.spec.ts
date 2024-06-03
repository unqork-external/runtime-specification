import { IconComponentDefinition } from './icon.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Icon Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(IconComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
