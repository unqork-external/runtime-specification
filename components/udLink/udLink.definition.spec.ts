import { UdLinkComponentDefinition } from './udLink.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Link Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdLinkComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
