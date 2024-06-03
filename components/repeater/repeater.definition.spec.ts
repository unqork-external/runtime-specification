import { RepeaterComponentDefinition } from './repeater.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Repeater Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(RepeaterComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    //expect(schema.properties).toEqual({})
  })
})
