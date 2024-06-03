import { UdImageComponentDefinition } from './udImage.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Image Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdImageComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
