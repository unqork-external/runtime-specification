import { MuiLayoutGridComponentDefinition, MuiLayoutGridComponentState } from './muiLayoutGrid.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('MUI Layout Grid Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(MuiLayoutGridComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(MuiLayoutGridComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
