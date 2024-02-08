import { ContainsCondition } from './conditionTypes/contains.condition'
import { ExactCondition } from './conditionTypes/exact.condition'
import { RangeContains } from './conditionTypes/range.contains'

export type DecideCondition = ExactCondition | ContainsCondition | RangeContains
