module.exports = {
  setupFiles: ['<rootDir>tests/config/configEnzyme.js'],
  transform: {
    '^.+\\.js|.jsx$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/App.jsx',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$':
        '<rootDir>tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>tests/mocks/styleMock.js',
  },
};
