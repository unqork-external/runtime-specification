import { ToggleReflexiveInputOperation } from './toggleReflexiveInput.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ToggleReflexiveInput Tests', () => {
  it('ToggleReflexiveInput Model', () => {
    const { schema } = generateSchemaAndValidate(ToggleReflexiveInputOperation)

    expect(schema).toMatchSnapshot()
  })
})
