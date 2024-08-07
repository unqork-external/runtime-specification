import { Example, Any } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { trimAll } from '../../../../utilities'
import { TargetedOperationOptions } from '../../interface'

export class TableAddRowOperationOptions extends TargetedOperationOptions {
  @TrimmedDescription(`
    The index where we would like to place the new row. 
    Table rows are zero index-based, meaning zero represents the first position.
    Zero, Negative and Undefined values will add the row at the top of the table and
    values larger than the number of rows will add the new row at the bottom of the table.
    This field supports interpolation.
  `)
  @Example(
    trimAll(`
      0 - adds a row at the first position of the table
      1000 - if the table has less than 1000 elements, it adds a row at the last position
      -5 - adds a row at the first position of the table
      3 - if the table has more than 3 elements, it adds a row at the position #3
    `),
  )
  @Any('string', 'number')
  targetIndex?: string | number

  @TrimmedDescription(`
    A JSON object that contains the values for the new row.
    Object keys must match existing column keys otherwise the value will be ignored.
    Value data types must match the column's component definition, i.e: if the column has a NumberComponent, trying to assign an array to it won't play nice
    If rowValue is not specified, an empty row will be added.
  `)
  @Example(
    trimAll(`
       {
    "Name": "AppOne",
    "Date": "12/01/2023",
    "Number": 123,
  }
    `),
  )
  rowValue?: object
}
