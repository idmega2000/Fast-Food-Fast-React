module.exports = {
    setupFiles: ['<rootDir>tests/config/configEnzyme.js'],
    transform: {
      '^.+\\.js|.jsx$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg)$':
        '<rootDir>tests/mocks/fileMock.js',
      '\\.(css|scss)$': '<rootDir>tests/mocks/styleMock.js'
    }
  }
