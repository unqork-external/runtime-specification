import { MissingComponentDefinition } from './missingComponent.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Missing Component Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MissingComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },

      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
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
        description: 'Name of the type of component.',
        const: '__missing__',
        examples: ['__missing__'],
      },
      previousType: {
        type: 'string',
        description: 'Type of the unsupported component',
      },
      previousLabel: {
        type: 'string',
        description: 'Label of the unsupported component',
      },
      previousKey: {
        type: 'string',
        description: 'Key of the unsupported component',
      },
      validation: { $ref: '#/definitions/Validation' },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
