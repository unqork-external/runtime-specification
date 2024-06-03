import { HtmlElementDefinition } from './htmlElement.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('HTML Element Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(HtmlElementDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
