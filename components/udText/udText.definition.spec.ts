import { UdTextComponentDefinition } from './udText.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Text Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdTextComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
