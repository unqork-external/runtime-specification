import { TrayComponentDefinition } from './tray.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Tray Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TrayComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
