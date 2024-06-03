import { UdLinkViewComponentDefinition } from './udLinkView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Link View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdLinkViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
