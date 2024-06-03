import { UdToggleViewComponentDefinition } from './udToggleView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Toggle View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdToggleViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
