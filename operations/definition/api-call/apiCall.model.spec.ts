/* eslint-disable max-len */
import { ApiCallOperation } from './apiCall.model'
import { ApiOutputArgs } from './apiCall.type'
import { HTTPMethodType } from './method.type'
import { ServiceType } from './serviceType.type'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

const basicApiCallOptions = {
  method: HTTPMethodType.GET,
  url: 'https://api-calls-r-us.com',
  outputs: [
    {
      ...new ApiOutputArgs(),
      targetKey: 'outputTarget',
      responseJSONPath: 'pathname',
    },
  ],
}

describe('API Call Operation Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ApiCallOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('API Call Operation should validate appropriately', () => {
    const validOp = createOperation(OperationTypes.API_CALL, basicApiCallOptions)
    const invalidOp = createOperation(OperationTypes.API_CALL, {
      method: HTTPMethodType.GET,
      url: 'https://api-calls-r-us.com',
      outputs: [
        // ts-ignore is used before invalid definitions throughout this test file
        // otherwise, they're flagged as type errors because we have schemas now, yay!
        // @ts-ignore
        {
          seekValuesFromHeader: true,
        },
      ],
    })

    expect(validate(validOp)).toBeTrue()
    expect(validate(invalidOp)).toBeFalse()
  })

  it('should set all appropriate defaults', () => {
    const op = createOperation(OperationTypes.API_CALL, basicApiCallOptions)
    expect(op.options.withCredentials).toStrictEqual(false)
    expect(op.options.maximumRetryCount).toStrictEqual(3)
    expect(op.options.assignAPIValues).toStrictEqual(false)
    expect(op.options.assignEmptyValues).toStrictEqual(true)
    expect(op.options.assumeDataKeyInResponse).toStrictEqual(false)
    expect(op.options.convertXmlResponseToJson).toStrictEqual(false)
    expect(op.options.assumeRole).toStrictEqual(true)
    expect(op.options.expectBinaryResponse).toStrictEqual(false)
    expect(op.options.flattenToSingleRecord).toStrictEqual(false)
    expect(op.options.outputValuesOnly).toStrictEqual(false)
    expect(op.options.serviceType).toStrictEqual(ServiceType.UNQORK)
    expect(op.options.isMultiPartRequest).toStrictEqual(false)
    expect(op.options.blockExecution).toStrictEqual(false)
    expect(op.options.outputValuesOnly).toStrictEqual(false)
    expect(op.options.topLevelArray).toStrictEqual(false)
    expect(op.options.outputs).toEqual([
      {
        targetKey: 'outputTarget',
        responseJSONPath: 'pathname',
        seekValuesFromHeader: false,
        property: 'value',
        useJSONPath: false,
      },
    ])
  })

  it('should be invalid if method or url are blank', () => {
    // @ts-ignore
    const missingMethodOp = createOperation(OperationTypes.API_CALL, { ...basicApiCallOptions, method: '' })
    const missingUrlOp = createOperation(OperationTypes.API_CALL, { ...basicApiCallOptions, url: '' })

    expect(validate(missingMethodOp)).toBeFalse()
    expect(validate(missingUrlOp)).toBeFalse()
  })

  it('should be invalid if outputs.targetKey are missing', () => {
    const missingOutputTargetOp = createOperation(OperationTypes.API_CALL, {
      ...basicApiCallOptions,
      // @ts-ignore
      outputs: [{ targetKey: '' }],
    })

    expect(validate(missingOutputTargetOp)).toBeFalse()
  })

  it('should ensure that arrayKeyPromote is required when topLevelArray is true', () => {
    const invalidOp = createOperation(OperationTypes.API_CALL, {
      ...basicApiCallOptions,
      // @ts-ignore
      topLevelArray: true,
    })

    expect(validate(invalidOp)).toBeFalse()
  })
})
