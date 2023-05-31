import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverageFrom: [
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/__tests__/**",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  globals: {
    NODE_ENV: "test",
  },
  testPathIgnorePatterns: ["/node_modules/","/src/__tests__/mocks"]
};

export default config;
