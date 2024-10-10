import { UdButtonViewComponentDefinition, UdButtonViewComponentState } from './udButtonView.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Button View Contract Tests', function () {
  it('should ensure the contract is clear - component defintion', function () {
    const { schema } = generateSchemaAndValidate(UdButtonViewComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(UdButtonViewComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
