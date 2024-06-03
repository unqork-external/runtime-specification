import { MissingComponentDefinition } from './missingComponent.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Missing Component Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MissingComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
