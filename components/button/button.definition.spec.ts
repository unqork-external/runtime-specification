import { ButtonComponentDefinition } from './button.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Button Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ButtonComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
