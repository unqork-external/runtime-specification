import { NumberComponentDefinition } from './number.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Number Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NumberComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      adornments: {
        $ref: '#/definitions/NumberAdornments',
      },
      defaultValue: {
        description: trimAll(`
          The initial value for the component configured in the designer.
          - For interaction type FIELD: it is the value that will initially appear inside the text box;
          - For interaction type RANGE: it is the middle point and the initial value of the slider;
          - For interaction type STEPPER: it is the initial value that will appear between the stepper buttons;
        `),
        type: 'number',
      },
      display: {
        $ref: '#/definitions/Display',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
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
        type: 'string',
        minLength: 1,
        description: 'Describes the component type',
        const: 'number',
        examples: ['number'],
      },
      executable: {
        default: true,
        description: trimAll(`
          Defines whether or not the object will respond to events or fire operations.
          When \`true\`, the object will perform and behave as defined in its spec.
          When \`false\`, the object will no longer be responsive to the system.
        `),
        type: 'boolean',
      },
      field: {
        $ref: '#/definitions/NumberField',
      },
      format: {
        $ref: '#/definitions/NumberFormat',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      left: {
        description: 'Fully qualified child keys for adornments in the left slot. Maintained by nestable api.',
        type: 'array',
      },
      nestables: {
        $ref: '#/definitions/NumberNestables',
      },
      options: {
        $ref: '#/definitions/NumberOptions',
      },
      right: {
        description: 'Fully qualified child keys for adornments in the right slot. Maintained by nestable api.',
        type: 'array',
      },
      simpleView: {
        $ref: '#/definitions/NumberSimpleViewModel',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      useSimpleView: {
        default: false,
        type: 'boolean',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Value of the number component. It will be undefined if not set.',
        type: 'number',
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
    })
  })
})
