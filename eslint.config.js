// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({ ignores: ["dist", "storybook-static", "coverage"] }, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
}, {
  // Barrels, context providers, and Storybook config intentionally co-locate
  // non-component exports (re-exports, hooks, types, decorators). Fast Refresh
  // doesn't meaningfully apply to them, so the rule is just noise here.
  files: ["**/index.tsx", "**/*Context.tsx", ".storybook/**/*.{ts,tsx}"],
  rules: {
    "react-refresh/only-export-components": "off",
  },
}, storybook.configs["flat/recommended"]);
