import { ConfettiComponentDefinition } from './confetti.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Confetti Definition Testing', () => {
  it('should ensure hideConfetti exists and is documented', () => {
    const response = generateSchemaAndValidate(ConfettiComponentDefinition)
    expect(response.schema.properties.hideConfetti).toMatchObject({
      type: 'boolean',
      description: '`hideConfetti` allows you to hide the confetti display on demand.',
      default: false,
    })
  })

  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ConfettiComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
