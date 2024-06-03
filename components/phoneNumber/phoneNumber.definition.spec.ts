import { PhoneNumberComponentDefinition } from './phoneNumber.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Phone Number Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PhoneNumberComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
