import { DecisionComponentDefinition } from './decision.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Decision Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DecisionComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
