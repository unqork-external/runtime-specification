/* eslint-disable max-len */
import { DataTableDefinition } from './datatable.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Data Table Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DataTableDefinition)

    expect(schema.required).toEqual(['key', 'type', 'headers'])
    expect(schema.properties).toEqual({
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      executable: {
        default: true,
        description:
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      headers: {
        description:
          "'headers' serve as a brief descriptor or label that identify the content or category of data within a particular column. A header should succinctly convey the type or purpose of the information presented in the column.",
        examples: [
          ['season', 'element'],
          ['name', 'element', 'benderStatus'],
          "<Example> Prompt: \"I want to build a data table component with columns for 'name', 'age', and 'favorite color'.\" Response: { type: 'datatable', headers: ['name', 'age', 'favorite color'] } </Example>",
        ],
        type: 'array',
      },
      initialData: {
        description:
          "'initialData' holds the collection of data that the Data Table is first created with, structured as an array of objects. Each object represents a row in the table. The keys in each object correspond to the specified 'headers', and the values should then map to the corresponding cell within that object's row. 'initialData' holds the original values of the data before any transformation takes place. Values may include primitive data types or formulas.",
        examples: [
          [
            {
              element: 'water',
              season: 'winter',
            },
            {
              element: 'air',
              season: 'spring',
            },
            {
              element: 'fire',
              season: 'summer',
            },
            {
              element: 'earth',
              season: 'fall',
            },
          ],
          [
            {
              benderStatus: '=BOOLEAN(element)',
              element: 'water',
              name: 'Katara',
            },
            {
              benderStatus: '=BOOLEAN(element)',
              element: 'air',
              name: 'Aang',
            },
            {
              benderStatus: '=BOOLEAN(element)',
              element: 'fire',
              name: 'Zuko',
            },
            {
              benderStatus: '=BOOLEAN(element)',
              element: 'earth',
              name: 'Toph',
            },
            {
              benderStatus: '=BOOLEAN(element)',
              name: 'Sokka',
            },
          ],
          "<Example> Prompt: \"I want to build a data table component with columns for 'firstName', 'lastName', and 'fullName'. 'fullName' should be a formula that joins 'firstName' and 'lastName', with a space in the middle. The initial data we have is [{ firstName: 'John', lastName: 'Doe'}, { firstName: 'Jane', lastName: 'Doe'}].\" Response: { type: 'datatable', headers: ['firstName', 'lastName', 'fullName'], initialData: [ { firstName: 'John', lastName: 'Doe', fullName: '=CONCAT('firstName', ' ', 'lastName')'}, { firstName: 'Jane', lastName: 'Doe', fullName: '=CONCAT('firstName', ' ', 'lastName')'}, ] } </Example>",
        ],
        type: 'array',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      key: {
        description:
          "A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.",
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        type: 'string',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      type: {
        const: 'datatable',
        description: 'Name of the type of component.',
        examples: ['datatable'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description:
          "Data Table's 'value' property refers to the information held within the table after 'initialData' has been parsed and the table gets populated. 'value' gets populated during Data Table initialization, and when the 'EXECUTE' operation is triggered on the Data Table, as long as 'executable' is TRUE.",
        examples: [
          [
            {
              element: 'water',
              season: 'winter',
            },
            {
              element: 'air',
              season: 'spring',
            },
            {
              element: 'fire',
              season: 'summer',
            },
            {
              element: 'earth',
              season: 'fall',
            },
          ],
          [
            {
              benderStatus: true,
              element: 'water',
              name: 'Katara',
            },
            {
              benderStatus: true,
              element: 'air',
              name: 'Aang',
            },
            {
              benderStatus: true,
              element: 'fire',
              name: 'Zuko',
            },
            {
              benderStatus: true,
              element: 'earth',
              name: 'Toph',
            },
            {
              benderStatus: false,
              element: '',
              name: 'Sokka',
            },
          ],
        ],
        type: 'array',
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
    })
  })

  it('should be an object array', () => {
    const { validate } = generateSchemaAndValidate(DataTableDefinition)

    const def = new DataTableDefinition()
    def.key = '1'
    def.headers = ['solo column']
    def.value = [{}, {}]

    validate(def)
    expect(validate.errors).toBeNull()
  })
})
