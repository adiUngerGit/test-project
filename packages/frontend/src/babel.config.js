module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript files
    testEnvironment: 'jsdom', // Simulate browser environment
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Use babel-jest for JS and TS files
    },
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)', // Ensure axios and other ES modules are transformed
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    roots: ['<rootDir>/packages'], // Set the root to your workspaces directory (adjust if necessary)
  };
  