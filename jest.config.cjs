const preset = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...preset.defaults,
  testMatch: ["**/src/**/?(*.)+(spec|test).[tj]s?(x)"]
}
