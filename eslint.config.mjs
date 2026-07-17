import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    {
        files: ['**/*.ts'],
        extends: [tseslint.configs.recommended]
    },
    {
        rules: {
            "no-duplicate-imports": "error",
            "no-self-compare": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "no-else-return": "error",
            "no-empty-function": "error",
            "no-unassigned-vars": "error",
            "no-var": "error",
            "no-script-url": "error",
            "no-eval": "error",
            "no-alert": "error",
            "func-names": "error",
            "init-declarations": "error",
            "no-implied-eval": "error",
            "no-loop-func": "error",
            "no-multi-assign": "error",
            "prefer-const": "error",
            "semi": ["error", "never"]
        }
    }
)