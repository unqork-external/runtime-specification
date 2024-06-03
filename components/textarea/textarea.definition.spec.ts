import { TextareaComponentDefinition } from './textarea.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Text Area Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TextareaComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
