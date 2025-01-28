import { ManipulateDomUnsafeOperation } from './manipulateDomUnsafe.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ManipulateDomUnsafe Tests', () => {
  it('ManipulateDomUnsafe Model', () => {
    const { schema } = generateSchemaAndValidate(ManipulateDomUnsafeOperation)

    expect(schema).toMatchSnapshot()
  })
})
