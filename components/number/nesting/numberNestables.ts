import { LeftAdornmentNestable, RightAdornmentNestable } from './adornmentNestable'
import { NestableDef } from '../../../nestables'

export class NumberNestables extends NestableDef {
  left: LeftAdornmentNestable = new LeftAdornmentNestable()
  right: RightAdornmentNestable = new RightAdornmentNestable()
}
