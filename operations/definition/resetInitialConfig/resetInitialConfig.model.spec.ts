import { ResetInitialConfigOperation } from './resetInitialConfig.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ResetInitialConfig Tests', () => {
  it('ResetInitialConfig Model', () => {
    const { schema } = generateSchemaAndValidate(ResetInitialConfigOperation)

    expect(schema).toMatchSnapshot()
  })
})
