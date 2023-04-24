/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/(?!axios)'],
    moduleNameMapper: {
        '\\.(css|sass|scss)$': '<rootDir>/src/test/mocks/styleMock.ts',
        '^lodash-es$': 'lodash',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
