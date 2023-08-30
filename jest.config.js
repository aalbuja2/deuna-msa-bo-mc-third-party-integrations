module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [],
  coverageReporters: ['cobertura', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
  reporters: [
    'default',
    [ 'jest-junit', { outputDirectory: 'reports', outputName: 'junit.xml' } ], ],
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['./test/setup-tests.ts'],
};