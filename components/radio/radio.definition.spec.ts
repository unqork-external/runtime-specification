import { RadioComponentDefinition } from './radio.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Radio Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(RadioComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
