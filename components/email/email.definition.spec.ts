import { EmailComponentDefinition } from './email.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Email Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(EmailComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
