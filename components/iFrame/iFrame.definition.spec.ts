import { IFrameComponentDefinition } from './iFrame.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('IFrame Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(IFrameComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
