import { FieldGroupComponentDefinition, FieldGroupComponentState } from './fieldGroup.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Field Group Contract Tests', function () {
  it('should ensure the contract is clear - component defintion', function () {
    const { schema } = generateSchemaAndValidate(FieldGroupComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(FieldGroupComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
