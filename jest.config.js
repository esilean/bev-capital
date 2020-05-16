module.exports = {
  verbose: true,
  roots: ['<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/file.mock.ts',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/style.mock.ts',
  },
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
}
