import { ViewgridComponentDefinition } from './viewgrid.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('View Grid Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ViewgridComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
