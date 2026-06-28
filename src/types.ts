import type { Linter } from "eslint"
import type { RuleOptions } from '@stylistic/eslint-plugin'

export type Rules = {
  [K in keyof RuleOptions]?: Linter.RuleSeverity | [Linter.RuleSeverity, ...RuleOptions[K]]
}