import { DecisionComponentDefinition } from './decision.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Decision Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DecisionComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'decision',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['decision'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      field: { $ref: '#/definitions/Field' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      triggerType: { type: 'string' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
