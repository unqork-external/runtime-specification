import { SingleCheckboxComponentDefinition } from './singleCheckbox.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Single Checkbox Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SingleCheckboxComponentDefinition)

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
        const: 'checkbox',
        examples: ['checkbox'],
      },
      useSimpleView: {
        default: false,
        type: 'boolean',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/SingleCheckboxField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        type: 'boolean',
        description: 'Value of the single checkbox.',
        default: undefined,
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      styling: {
        $ref: '#/definitions/SingleCheckboxStyling',
      },
      adornments: {
        $ref: '#/definitions/SingleCheckboxAdornments',
      },
      left: {
        description: 'Fully qualified child keys for adornments in the left slot. Maintained by nestable api.',
        type: 'array',
      },
      nestables: {
        description: 'Nestable definitions for adorned single checkbox component.',
        type: 'object',
      },
      right: {
        description: 'Fully qualified child keys for adornments in the right slot. Maintained by nestable api.',
        type: 'array',
      },
    })
  })
})
