module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: 'jest-extended',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.tmp',
    '<rootDir>/dist',
    '<rootDir>/build',
    '<rootDir>/scripts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: true
    }
  }
}
