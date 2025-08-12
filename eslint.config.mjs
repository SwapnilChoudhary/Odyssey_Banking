import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // was "error"
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "react/no-unescaped-entities": "warn", // optional
      "@next/next/no-img-element": "warn",   // optional
    },
  },
];

export default eslintConfig;
