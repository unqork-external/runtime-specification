import { BasicDropZoneComponentDefinition } from './basicDropZone.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Basic Drop Zone Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(BasicDropZoneComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
