import { TrayComponentDefinition, TrayComponentState } from './tray.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Tray Contract Tests', function () {
  it('should ensure the contract is clear - component defintion', function () {
    const { schema } = generateSchemaAndValidate(TrayComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(TrayComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
