import { Entity, createEntity } from './entities.types'
import { generateSchemaAndValidate } from '../../utilities'

describe('Entities Spec', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(Entity)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        EntityTarget: {
          description:
            'An Entity Target is a representation of a key that maps to ' +
            'an engine value and a property that maps to the Entity data.',
          properties: {
            keyName: {
              description: 'The name/key of the target that maps to a engine value',
              examples: ['firstName', 'grid', 'checkboxOptionA'],
              minLength: 1,
              type: 'string',
            },
            targets: {
              description:
                'Targets are an optional collection of engine value references used get and set engine values. ' +
                'An Entity target might optionally need to define exactly what values it cares about. This is useful ' +
                'when dealing with nested data',
              examples: [
                '[{keyName: "firstName", value: "{{firstName.value}}" }]',
                '[{keyName: "optionA", value: true" }]',
              ],
              items: {
                $ref: '#/definitions/EntityTarget',
              },
              type: 'array',
            },
            value: {
              description:
                'Either the explicit value for the entity or an interpolated path to resolve the entity value',
              examples: ['{{firstName.value}}', 'true', 'unknownValue'],
              minLength: 1,
              type: 'string',
            },
          },
          required: ['keyName', 'value'],
          type: 'object',
        },
      },
      description: 'An Entity is a data structure within the engine to represent a user-defined model.',
      properties: {
        key: {
          description: 'Entity key is a unique key to target entities',
          examples: ['moduleId'],
          minLength: 1,
          type: 'string',
        },
        moduleId: {
          description: 'The module id the entity is associated with.',
          examples: ['12345'],
          minLength: 1,
          type: 'string',
        },
        targets: {
          description: 'Targets are a collection of engine value references used get and set engine values',
          examples: ['[{key: firstName, property: firstName }]', '[{key: firstName, property: differentPropName }]'],
          items: {
            $ref: '#/definitions/EntityTarget',
          },
          type: 'array',
        },
      },
      required: ['key', 'moduleId', 'targets'],
      type: 'object',
    })
  })

  it('should pass validation', () => {
    const entity = createEntity({
      key: 'moduleId',
      moduleId: '12345',
      targets: [
        {
          keyName: 'firstName',
          value: 'firstName.value',
        },
      ],
    })
    const isValid = validate(entity)
    expect(isValid).toBe(true)
    const errors = validate.errors

    expect(errors).toStrictEqual(null)
  })

  it('should pass validation with nested targets targets', () => {
    const entity = createEntity({
      key: 'moduleId',
      moduleId: '12345',
      targets: [
        {
          keyName: 'firstName',
          value: 'firstNameValue',
        },
        {
          keyName: 'grid',
          value: 'gridValue',
          targets: [
            {
              keyName: 'lastName',
              value: 'lastNameValue',
            },
          ],
        },
      ],
    })
    const isValid = validate(entity)
    expect(isValid).toBe(true)
    const errors = validate.errors

    expect(errors).toStrictEqual(null)
  })

  it('should pass validation with empty targets', () => {
    const entity = createEntity({ key: 'moduleId', moduleId: '12345', targets: [] })
    const isValid = validate(entity)
    expect(isValid).toBe(true)
    const errors = validate.errors

    expect(errors).toStrictEqual(null)
  })

  it('should fail validation with empty object', () => {
    const entity = {}
    const isValid = validate(entity)
    expect(isValid).toBe(false)
    const errors = validate.errors

    expect(errors).toStrictEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'key'",
        params: { missingProperty: 'key' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'moduleId'",
        params: { missingProperty: 'moduleId' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'targets'",
        params: { missingProperty: 'targets' },
        schemaPath: '#/required',
      },
    ])
  })

  it('should fail validation with no targets', () => {
    const entity = createEntity({ key: 'moduleId' })
    const isValid = validate(entity)
    expect(isValid).toBe(false)
    const errors = validate.errors

    expect(errors).toStrictEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'moduleId'",
        params: { missingProperty: 'moduleId' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'targets'",
        params: { missingProperty: 'targets' },
        schemaPath: '#/required',
      },
    ])
  })

  it('should fail validation with no key', () => {
    const entity = createEntity({ targets: [] })
    const isValid = validate(entity)
    expect(isValid).toBe(false)
    const errors = validate.errors

    expect(errors).toStrictEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'key'",
        params: { missingProperty: 'key' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'moduleId'",
        params: { missingProperty: 'moduleId' },
        schemaPath: '#/required',
      },
    ])
  })

  it('should fail validation with property missing from target', () => {
    //@ts-ignore
    const entity = createEntity({ key: 'moduleId', targets: [{ keyName: 'firstName' }] })
    const isValid = validate(entity)
    expect(isValid).toBe(false)
    const errors = validate.errors

    expect(errors).toStrictEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'moduleId'",
        params: {
          missingProperty: 'moduleId',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '/targets/0',
        keyword: 'required',
        message: "must have required property 'value'",
        params: {
          missingProperty: 'value',
        },
        schemaPath: '#/required',
      },
    ])
  })

  it('should fail validation with key missing from target', () => {
    //@ts-ignore
    const entity = createEntity({ key: 'moduleId', targets: [{ value: 'firstName' }] })
    const isValid = validate(entity)
    expect(isValid).toBe(false)
    const errors = validate.errors

    expect(errors).toStrictEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'moduleId'",
        params: {
          missingProperty: 'moduleId',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '/targets/0',
        keyword: 'required',
        message: "must have required property 'keyName'",
        params: {
          missingProperty: 'keyName',
        },
        schemaPath: '#/required',
      },
    ])
  })
})
