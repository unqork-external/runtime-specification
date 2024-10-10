import { UdViewComponentDefinition, UdViewComponentState } from './udView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD View Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(UdViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(UdViewComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
