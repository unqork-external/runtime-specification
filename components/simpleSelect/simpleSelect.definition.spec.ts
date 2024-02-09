import { SimpleSelectComponentDefinition } from './simpleSelect.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SimpleSelect Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SimpleSelectComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      useSimpleView: {
        default: false,
        type: 'boolean',
      },
      simpleView: {
        $ref: '#/definitions/SimpleSelectSimpleViewModel',
      },
      display: {
        $ref: '#/definitions/Display',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: {
        $ref: '#/definitions/SimpleSelectField',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      key: {
        description:
          // eslint-disable-next-line max-len
          "A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.",
        minLength: 1,
        type: 'string',
        examples: ['I am the key', 'bestKeyEver'],
      },
      nestables: {
        description: 'Nestable definitions for simpleSelect component',
        type: 'object',
      },
      optionKeys: {
        description: 'Fully qualified child keys for options nestables. Maintained by nestable api.',
        type: 'array',
      },
      options: {
        description: 'Nested option component definition.',
        items: {
          $ref: '#/definitions/BaseComponentDefinition',
        },
        type: 'array',
      },
      type: {
        const: 'simpleSelect',
        description: 'Name of the type of component.',
        examples: ['simpleSelect'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Value of the simpleSelect',
        type: 'object',
      },
      selectedOptions: {
        description: 'Nested selected option component definitions',
        type: 'array',
        items: {
          $ref: '#/definitions/BaseComponentDefinition',
        },
      },
      selected: {
        description: 'Fully qualified child keys for selectedOptions nestables. Maintained by nestable api.',
        type: 'array',
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
