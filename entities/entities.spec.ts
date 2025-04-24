import { Entity, createEntity } from './entities.types'
import { type EntityTarget } from './entitiesTarget.types'
import { generateSchemaAndValidate } from '../../utilities'

describe('Entities Spec', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(Entity)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
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
    const entity = createEntity({ key: 'moduleId', targets: [{ keyName: 'firstName' }] as EntityTarget[] })
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
    const entity = createEntity({ key: 'moduleId', targets: [{ value: 'firstName' }] as EntityTarget[] })
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
