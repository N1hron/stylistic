import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";

import { rules } from "./rules";

export const config: Linter.Config = {
  plugins: { "@stylistic": stylistic },
  rules,
}