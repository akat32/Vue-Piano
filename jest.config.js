module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    },
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
      ],
      
    transformIgnorePatterns: ['<rootDir>/node_modules/']
}

