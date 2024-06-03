import type { ContainsCondition } from './conditionTypes/contains.condition'
import type { ExactCondition } from './conditionTypes/exact.condition'
import type { RangeContains } from './conditionTypes/range.contains'

export type DecideCondition = ExactCondition | ContainsCondition | RangeContains
