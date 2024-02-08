import { NumberStepperComponentDefinition } from './numberStepper.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('NumberStepper Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NumberStepperComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      defaultValue: {
        description: trimAll(`The initial value for the component configured in the designer.
           It is the value that determines the stepper start position.`),
        type: 'number',
      },
      display: {
        $ref: '#/definitions/Display',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      executable: {
        default: true,
        description: trimAll(`Defines whether or not the object will respond to events or fire operations.
           When \`true\`, the object will perform and behave as defined in its spec.
           When \`false\`, the object will no longer be responsive to the system.`),
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
      key: {
        description: trimAll(`A user-defined key that is unique within a module.
           It doesn't have to be unique across different modules.
           Objects in the runtime use keys to target other components.`),
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        type: 'string',
      },
      options: {
        $ref: '#/definitions/NumberOptions',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      type: {
        const: 'numberStepper',
        description: 'Describes the component type',
        examples: ['numberStepper'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Value of the numberStepper component. It will be undefined if not set.',
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
