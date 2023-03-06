/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  //globalSetup: "<rootDir>/src/testSetup.ts",
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "src/tsconfig.json"
      }
    ]
  }
};
