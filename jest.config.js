module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  coverageDirectory: "coverage/multipurposewebsite",
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};
