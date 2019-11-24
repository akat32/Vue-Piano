module.exports = {
    verbose: true,
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json", "vue", "html"],
    transform: {
        '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
        "^.+\\.(ts|tsx)$": "ts-jest",
        ".*\\.(vue)$": "vue-jest"

    },
    testURL: "http://localhost",
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'

    },
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
      ],      
    transformIgnorePatterns: ['/node_modules/(?!vue-loading-spinner)'],
    modulePaths: ["<rootDir>"],
    globals: {
        window: {}
    }
}

