import { CheckboxesComponentDefinition } from './checkboxes.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Checkboxes Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CheckboxesComponentDefinition)

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
        description: 'Type of the component.',
        const: 'checkboxes',
        examples: ['checkboxes'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/CheckboxesInputField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        type: 'array',
        description: 'Store values for selected checkboxes',
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      options: { $ref: '#/definitions/CheckboxesOptions' },
      defaultValue: { type: 'string' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
