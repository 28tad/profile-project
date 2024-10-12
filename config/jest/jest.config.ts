export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/config/jest/jestEmptyComponent.tsx',
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(s?css)$': 'identity-obj-proxy',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
};
