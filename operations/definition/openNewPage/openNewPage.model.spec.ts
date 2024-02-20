import { OpenNewPageOperation } from './openNewPage.model'
import { OpenNewPageType } from './openNewPageType.enum'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Open New Page Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(OpenNewPageOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('Open New Page should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGEOPEN,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Open new page should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGEOPEN,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Page open should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGE,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if value is blank', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGE,
      value: '',
    })

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
