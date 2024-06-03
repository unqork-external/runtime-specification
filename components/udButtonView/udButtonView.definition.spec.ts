import { UdButtonViewComponentDefinition } from './udButtonView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Button View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdButtonViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
