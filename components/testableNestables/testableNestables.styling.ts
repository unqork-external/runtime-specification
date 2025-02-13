import { Description, Property } from '@tsed/schema'

import { TestableNestablesTargets } from './testableNestablesTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class TestableNestablesStyleTargets implements TargetsModel<TestableNestablesTargets> {
  @Css()
  @Description('Adds styles to testableNestables root ComponentWrapper.')
  [TestableNestablesTargets.root]: CssClassOrProps
}

export class TestableNestablesStyling extends StylingModel<TestableNestablesStyleTargets> {
  @Property()
  declare targets: TestableNestablesStyleTargets
}
