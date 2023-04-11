import nxPreset from '@nrwl/jest/preset';

const { testEnvironment: _, ...presetWithoutTestEnv } = nxPreset;

module.exports = {
  ...presetWithoutTestEnv,
  displayName: 'regression-repro-e2e',
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
    },
  },
};
