import { AdvancedModeJsonDifferComponentDefinition } from './advancedModeJsonDiffer.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('AdvancedModeJsonDiffer Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(AdvancedModeJsonDifferComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
