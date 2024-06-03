import { CollectionOf, Const, Description, Example, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Nestable, NestableDef, NestableType } from '../../nestables'

@Description('Nestable definition for the left slot adornments.')
export class LeftAdornmentNestable extends Nestable {
  @Const('left')
  propertyName: string = 'left' as const

  @Const(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY as const

  @Const('adornments.left')
  children: string = 'adornments.left' as const
}

@Description('Nestable definition for the right slot adornments.')
export class RightAdornmentNestable extends Nestable {
  @Const('right')
  propertyName: string = 'right' as const

  @Const(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY as const

  @Const('adornments.right')
  children: string = 'adornments.right' as const
}

@TrimmedDescription(`
  Standard Adornments is the most commonly leveraged 'Adornments' format.
  The two object keys 'left' and 'right', point to the array of objects to be held in the left or right adornment slots.  
`)
export class StandardAdornmentsProperties {
  @CollectionOf(() => BaseComponentDefinition)
  @Description('Array of objects (typically Icon objects) held in the left adornment slot.')
  @Example('') //TODO: WHAT IS AN EXAMPLE? NEED ONE
  left: BaseComponentDefinition[] = []

  @CollectionOf(() => BaseComponentDefinition)
  @Example('') //TODO: WHAT IS AN EXAMPLE? NEED ONE
  @Description('Array of objects (typically Icon objects) held in the right adornment slot.')
  right: BaseComponentDefinition[] = []
}

@Description(
  `The 'Nestable' definition for 'Standard Adornments'. Describes both the left and right slots as Nestables.`,
)
export class StandardAdornmentsAsNestables extends NestableDef {
  @Property(LeftAdornmentNestable)
  left: LeftAdornmentNestable = new LeftAdornmentNestable()

  @Property(RightAdornmentNestable)
  right: RightAdornmentNestable = new RightAdornmentNestable()
}
