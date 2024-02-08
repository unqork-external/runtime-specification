import { TestTextFieldComponentDefinition } from './testTextField.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('TestTextField Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TestTextFieldComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
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
        const: 'testTextField',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['testTextField'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Current value of the component',
        type: 'string',
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
