import { ChessboardComponentDefinition } from './chessboard.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Chessboard Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ChessboardComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
