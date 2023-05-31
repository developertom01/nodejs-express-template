import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverageFrom: [
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/tests__/**",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  globals: {
    NODE_ENV: "test",
  },
};

export default config;
