import { UdViewComponentDefinition } from './udView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD View Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
